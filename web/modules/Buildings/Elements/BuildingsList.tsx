import {
    DeleteOutlined,
    EyeTwoTone,
    EditTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined
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
    useBuildings
} from '@helpers';

import { useAuth } from 'context/AuthContext';

export type BuildingListTypeProps = {
    searchCriteria?: any;
};

export const BuildingList = ({ searchCriteria }: BuildingListTypeProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [buildings, setBuildings] = useState<DataQueryType>();
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
                total: buildings?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, buildings]
    );

    const { isLoading, data, error, refetch } = useBuildings(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setBuildings(data?.buildings);
            setPagination({
                ...pagination,
                total: data?.buildings?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    /*FIXME : Enable delete for Superadmin ?
    const { mutate, isLoading: deleteLoading } = useDeleteBuildingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBuildingMutation,
                _variables: DeleteBuildingMutationVariables,
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

    const deleteBuilding = ({ id }: DeleteBuildingMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };*/

    const columns = [
        {
            title: 'common:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'common:address1',
            dataIndex: 'address1',
            key: 'address1'
        },
        {
            title: 'common:address2',
            dataIndex: 'address2',
            key: 'address2'
        },
        {
            title: 'common:address3',
            dataIndex: 'address3',
            key: 'address3'
        },
        {
            title: 'common:post-code',
            dataIndex: 'postCode',
            key: 'postCode'
        },
        {
            title: 'common:city',
            dataIndex: 'city',
            key: 'city'
        },
        {
            title: 'common:country',
            dataIndex: 'country',
            key: 'country'
        },
        {
            title: 'common:contact-name',
            dataIndex: 'contactName',
            key: 'contactName'
        },
        {
            title: 'common:contact-phone',
            dataIndex: 'contactPhone',
            key: 'contactPhone'
        },
        {
            title: 'common:contact-mobile',
            dataIndex: 'contactMobile',
            key: 'contactMobile'
        },
        {
            title: 'common:contact-email',
            dataIndex: 'contactEmail',
            key: 'contactEmail'
        },
        {
            title: 'd:status',
            dataIndex: 'statusText',
            key: 'statusText'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/building/[id]', record.id)}
                    />
                    {/*FIXME : Enable delete + edit for Superadmin ?
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/building/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        loading={deleteLoading}
                        onClick={() => deleteBuilding({ id: record.id })}
                    />*/}
                </Space>
            )
        }
    ];
    return (
        <>
            {buildings ? (
                <AppTable
                    type="building"
                    columns={columns}
                    data={buildings!.results}
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
