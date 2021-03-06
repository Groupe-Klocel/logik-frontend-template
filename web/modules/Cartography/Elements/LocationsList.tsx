import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import {
    DeleteOutlined,
    EyeTwoTone,
    EditTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined
} from '@ant-design/icons';
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
    useLocations
} from '@helpers';
import {
    DeleteLocationMutation,
    DeleteLocationMutationVariables,
    useDeleteLocationMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';

export type LocationsListTypeProps = {
    searchCriteria?: any;
};

export const LocationsList = ({ searchCriteria }: LocationsListTypeProps) => {
    const { t } = useTranslation();

    const [locations, setLocations] = useState<DataQueryType>();
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
                total: locations?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, locations]
    );

    const { isLoading, data, error, refetch } = useLocations(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setLocations(data?.locations); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.locations?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteLocationMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteLocationMutation,
                _variables: DeleteLocationMutationVariables,
                _context: unknown
            ) => {
                if (!deleteLoading) {
                    refetch();
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteLocation = ({ id }: DeleteLocationMutationVariables) => {
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
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:block',
            dataIndex: ['block', 'name'],
            key: ['block', 'name'],
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:aisle',
            dataIndex: 'aisle',
            key: 'aisle',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'common:column',
            dataIndex: 'column',
            key: 'column',
            sorter: {
                multiple: 4
            },
            showSorterTooltip: false
        },
        {
            title: 'd:level',
            dataIndex: 'level',
            key: 'level',
            sorter: {
                multiple: 5
            },
            showSorterTooltip: false
        },
        {
            title: 'd:position',
            dataIndex: 'position',
            key: 'position',
            sorter: {
                multiple: 6
            },
            showSorterTooltip: false
        },
        {
            title: 'd:replenish',
            dataIndex: 'replenish',
            key: 'replenish',
            sorter: {
                multiple: 7
            },
            showSorterTooltip: false,
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/location/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/location/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        loading={deleteLoading}
                        onClick={() => deleteLocation({ id: record.id })}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {locations ? (
                <AppTable
                    type="locations"
                    columns={columns}
                    data={locations!.results}
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
