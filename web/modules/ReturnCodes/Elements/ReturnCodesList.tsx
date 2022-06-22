import { AppTable, ContentSpin, LinkButton } from '@components';
import { Button, Modal, Space } from 'antd';
import { returnCodesData } from 'fake-data/returnCodes';
import { DeleteOutlined, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
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
    useReturnCodes
} from '@helpers';
import {
    DeleteReturnCodeMutation,
    DeleteReturnCodeMutationVariables,
    useDeleteReturnCodeMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';

export type BlocksListTypeProps = {
    searchCriteria?: any;
};

export const ReturnCodesList = ({ searchCriteria }: BlocksListTypeProps) => {
    const { t } = useTranslation();

    const [returnCodes, setReturnCodes] = useState<DataQueryType>();
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
                total: returnCodes?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, returnCodes]
    );

    const { isLoading, data, error, refetch } = useReturnCodes(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setReturnCodes(data?.returnCodes);
            setPagination({
                ...pagination,
                total: data?.returnCodes?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteReturnCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteReturnCodeMutation,
                _variables: DeleteReturnCodeMutationVariables,
                _context: unknown
            ) => {
                if (!deleteLoading) {
                    refetch;
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteReturnCode = ({ id }: DeleteReturnCodeMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
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
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'd:type',
            dataIndex: 'type',
            key: 'type',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'actions:actions',
            key: 'actions',
            fixed: 'right',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/return-code/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/return-code/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        loading={deleteLoading}
                        onClick={() => deleteReturnCode({ id: record.id })}
                    />
                </Space>
            )
        }
    ];
    return (
        <>
            {returnCodes ? (
                <AppTable
                    type="return-codes"
                    columns={columns}
                    data={returnCodes!.results}
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
