import { CaretUpOutlined, CaretDownOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin } from '@components';
import { equipmentsData } from 'fake-data/equipments';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    showError,
    showSuccess,
    useEquipment
} from '@helpers';
import {
    DeleteEquipmentMutation,
    DeleteEquipmentMutationVariables,
    useDeleteEquipmentMutation
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';

export const EquipmentList = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [equipment, setEquipment] = useState<DataQueryType>();
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
                total: equipment?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, equipment]
    );

    const { isLoading, data, error, refetch } = useEquipment(
        // searchCriteria,
        undefined,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setEquipment(data?.equipments);
            setPagination({
                ...pagination,
                total: data?.equipments?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteEquipmentMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteEquipmentMutation,
                _variables: DeleteEquipmentMutationVariables,
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

    const deleteEquipment = ({ id }: DeleteEquipmentMutationVariables) => {
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
            title: 'common:stock-owner',
            dataIndex: 'stockOwner',
            key: 'stockOwner',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:type',
            dataIndex: 'type',
            key: 'type',
            sorter: {
                multiple: 4
            },
            showSorterTooltip: false
        },
        {
            title: 'd:priority',
            dataIndex: 'priority',
            key: 'priority',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status',
            sorter: {
                multiple: 5
            },
            showSorterTooltip: false
        },
        {
            title: 'd:available',
            dataIndex: 'available',
            key: 'available'
        },
        {
            title: 'd:distributed',
            dataIndex: 'distributed',
            key: 'distributed'
        },
        {
            title: 'd:mono-company',
            dataIndex: 'monoCompany',
            key: 'monoCompany'
        },
        {
            title: 'd:mono-carrier',
            dataIndex: 'monoCarrier',
            key: 'monoCarrier'
        },
        {
            title: 'd:mono-carrier',
            dataIndex: 'monoCarrier',
            key: 'monoCarrier'
        },
        {
            title: 'd:nb_max_box',
            dataIndex: 'maxBoxNb',
            key: 'maxBoxNb'
        },
        {
            title: 'd:check_position',
            dataIndex: 'checkPosition',
            key: 'checkPosition'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            fixed: 'right',
            render: (record: { id: number; name: string }) => (
                <Space>
                    <Button onClick={() => alert(`GO UP `)} icon={<CaretUpOutlined />} />
                    <Button onClick={() => alert(`GO DOWN `)} icon={<CaretDownOutlined />} />
                    <Button
                        icon={<EyeTwoTone />}
                        onClick={() => alert(`View ${record.id} - ${record.name}`)}
                    />
                </Space>
            )
        }
    ];
    return (
        <>
            {equipment ? (
                <AppTable
                    type="equipment"
                    columns={columns}
                    data={equipment!.results}
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
