import {
    CheckCircleOutlined,
    CloseSquareOutlined,
    DeleteOutlined,
    EditTwoTone,
    EyeTwoTone,
    PrinterOutlined
} from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    showError,
    showSuccess,
    useHandlingUnitModels
} from '@helpers';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import {
    SoftDeleteHandlingUnitModelMutation,
    SoftDeleteHandlingUnitModelMutationVariables,
    useSoftDeleteHandlingUnitModelMutation
} from 'generated/graphql';

export const HandlingUnitModelsList = () => {
    const { t } = useTranslation();

    const [handlingUnitModels, setHandlingUnitModels] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: handlingUnitModels?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, handlingUnitModels]
    );

    const { isLoading, data, error, refetch } = useHandlingUnitModels(
        // searchCriteria,
        undefined,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setHandlingUnitModels(data?.handlingUnitModels); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.handlingUnitModels?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: softDeleteLoading } = useSoftDeleteHandlingUnitModelMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteHandlingUnitModelMutation,
                _variables: SoftDeleteHandlingUnitModelMutationVariables,
                _context: any
            ) => {
                if (!softDeleteLoading) {
                    refetch();
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const softDeleteHandlingUnitModel = ({
        handlingUnitModelId
    }: SoftDeleteHandlingUnitModelMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ handlingUnitModelId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:type',
            dataIndex: 'typeText',
            key: 'typeText',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:category',
            dataIndex: 'categoryText',
            key: 'categoryText',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:status',
            dataIndex: 'statusText',
            key: 'statusText',
            sorter: {
                multiple: 4
            },
            showSorterTooltip: false
        },
        {
            title: 'd:length',
            dataIndex: 'length',
            key: 'length'
        },
        {
            title: 'd:width',
            dataIndex: 'width',
            key: 'width'
        },
        {
            title: 'd:height',
            dataIndex: 'height',
            key: 'height'
        },
        {
            title: 'd:empty-weight',
            dataIndex: 'weight',
            key: 'weight'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; status: number }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/handling-unit-model/[id]', record.id)}
                    />
                    {record.status != 1005 ? (
                        <>
                            <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/handling-unit-model/edit/[id]', record.id)}
                            />
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                loading={softDeleteLoading}
                                onClick={() =>
                                    softDeleteHandlingUnitModel({ handlingUnitModelId: record.id })
                                }
                            ></Button>
                        </>
                    ) : (
                        <></>
                    )}
                </Space>
            )
        }
    ];
    return (
        <>
            {handlingUnitModels ? (
                <AppTable
                    type="handlingUnitModels"
                    columns={columns}
                    data={handlingUnitModels!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};
