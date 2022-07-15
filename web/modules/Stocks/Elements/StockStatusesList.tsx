import { AppTable, LinkButton, ContentSpin } from '@components';
import { Button, Modal, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EditTwoTone, EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    pathParams,
    DataQueryType,
    PaginationType,
    orderByFormater,
    useStockStatuses,
    showError,
    showSuccess
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { DeleteParameterMutation, DeleteParameterMutationVariables, useDeleteParameterMutation } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';

export interface IStockStatusesListProps {
    searchCriteria?: any;
}

const StockStatusesList = ({ searchCriteria }: IStockStatusesListProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    
    const [stockStatuses, setStockStatuses] = useState<Array<any>>();

    const [sort, setSort] = useState<any>(null);
    
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error, refetch } = useStockStatuses();

    const { mutate, isLoading: deleteLoading } = useDeleteParameterMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteParameterMutation,
                _variables: DeleteParameterMutationVariables,
                _context: any
            ) => {
                refetch();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteParameter = ({ parameterId }: DeleteParameterMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ parameterId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: stockStatuses?.length,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, stockStatuses]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setStockStatuses(data?.listParametersForAScope);
            setPagination({
                ...pagination,
                total: data?.listParametersForAScope?.length
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const columns = [
        {
            title: 'd:name',
            dataIndex: 'text',
            key: 'text'
        },
        {
            title: 'd:code',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'd:system',
            dataIndex: 'system',
            key: 'system'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/stock-statuses/[id]', record.id)}
                    />

                    <LinkButton
                        icon={<EditOutlined />}
                        path={pathParams('/stock-statuses/edit/[id]', record.id)}
                    />

                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => {deleteParameter({parameterId: record.id})}}
                    />
                    
                </Space>
            )
        }
    ];

    return (
        <>
            {stockStatuses ? (
                <AppTable
                    type="stock-statuses"
                    columns={columns}
                    data={stockStatuses}
                    isLoading={isLoading}
                    pagination={pagination}
                    setPagination={onChangePagination}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { StockStatusesList };
