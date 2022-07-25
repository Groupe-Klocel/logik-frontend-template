import {
    CheckCircleOutlined,
    CloseSquareOutlined,
    DeleteOutlined,
    EyeTwoTone,
    PrinterOutlined
} from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import { packagingsData } from 'fake-data/packagings';
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
    usePackagings
} from '@helpers';
import {
    SoftDeletePackagingMutation,
    SoftDeletePackagingMutationVariables,
    useSoftDeletePackagingMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

export const PackagingsList = () => {
    const { t } = useTranslation();

    const [packagings, setPackagings] = useState<DataQueryType>();
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
                total: packagings?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, packagings]
    );

    const { isLoading, data, error, refetch } = usePackagings(
        // searchCriteria,
        undefined,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setPackagings(data?.packagings); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.packagings?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: softDeleteLoading } = useSoftDeletePackagingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeletePackagingMutation,
                _variables: SoftDeletePackagingMutationVariables,
                _context: any
            ) => {
                if (!softDeleteLoading) {
                    refetch;
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const softDeletePackaging = ({ packagingId }: SoftDeletePackagingMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ packagingId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'd:default',
            dataIndex: 'default',
            key: 'default',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:dispatchable',
            dataIndex: 'dispatchable',
            key: 'dispatchable',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:status',
            dataIndex: 'statusText',
            key: 'statusText'
        },
        {
            title: 'd:empty-weight',
            dataIndex: 'weight',
            key: 'weight'
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
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; system: boolean }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/packaging/[id]', record.id)}
                    />
                    {/* <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/feedback-overwrite/edit/[id]', record.id)}
                    /> */}
                    {/* <Button
                        icon={<PrinterOutlined />}
                        onClick={() => alert(`Print ${record.id} - ${record.name}`)}
                    /> */}
                    {record.system != true ? (
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            loading={softDeleteLoading}
                            onClick={() => softDeletePackaging({ packagingId: record.id })}
                        ></Button>
                    ) : (
                        <></>
                    )}
                </Space>
            )
        }
    ];
    return (
        <>
            {packagings ? (
                <AppTable
                    type="packagings"
                    columns={columns}
                    data={packagings!.results}
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
