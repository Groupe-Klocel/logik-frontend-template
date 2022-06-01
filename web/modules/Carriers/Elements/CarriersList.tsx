import {
    CheckCircleOutlined,
    CloseSquareOutlined,
    DeleteOutlined,
    EditTwoTone,
    EyeTwoTone
} from '@ant-design/icons';
import { AppTable, ContentSpin, LinkButton } from '@components';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    showError,
    showSuccess,
    useCarriers
} from '@helpers';
import { Button, Space } from 'antd';
import {
    DeleteCarrierMutation,
    DeleteCarrierMutationVariables,
    useDeleteCarrierMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import router from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export type CarriersListTypeProps = {
    searchCriteria?: any;
};
const CarriersList = ({ searchCriteria }: CarriersListTypeProps) => {
    const { t } = useTranslation();
    const [carriers, setCarriers] = useState<DataQueryType>();
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
                total: carriers?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, carriers]
    );

    const { isLoading, data, error } = useCarriers(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    console.log('Donnees : ', data);
    useEffect(() => {
        if (data) {
            setCarriers(data?.carriers); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.carriers?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteCarrierMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteCarrierMutation,
                _variables: DeleteCarrierMutationVariables,
                _context: any
            ) => {
                router.back();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteCarrier = ({ id }: DeleteCarrierMutationVariables) => {
        mutate({ id });
    };

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

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
            title: 'd:available',
            dataIndex: 'available',
            key: 'available',
            render: (available: Text) => {
                return available ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:code',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/carrier/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/carrier/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => deleteCarrier({ id: record.id })}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {carriers ? (
                <AppTable
                    type="carriers"
                    columns={columns}
                    data={carriers!.results}
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
export { CarriersList };
