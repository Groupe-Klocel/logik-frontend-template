import {
    CaretUpOutlined,
    CaretDownOutlined,
    EyeTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined,
    EditTwoTone
} from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    PaginationType,
    pathParams,
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

export type FeedbackOverwriteListTypeProps = {
    searchCriteria?: any;
};

export const EquipmentList = ({ searchCriteria }: FeedbackOverwriteListTypeProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [equipment, setEquipment] = useState<DataQueryType>();
    const [sort] = useState<any>({ ascending: true, field: 'priority' });
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
        searchCriteria,
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
            title: 'd:priority',
            dataIndex: 'priority',
            key: 'priority'
        },
        {
            title: 'common:stock-owner',
            dataIndex: ['stockOwner', 'name'],
            key: ['stockOwner', 'name']
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:type',
            dataIndex: 'typeText',
            key: 'typeText'
        },
        {
            title: 'd:status',
            dataIndex: 'statusText',
            key: 'statusText'
        },
        {
            title: 'd:available',
            dataIndex: 'available',
            key: 'available',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:distributed',
            dataIndex: 'distributed',
            key: 'distributed',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:mono-company',
            dataIndex: 'monoCompany',
            key: 'monoCompany',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:mono-carrier',
            dataIndex: 'monoCarrier',
            key: 'monoCarrier',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:nb-max-box',
            dataIndex: 'nbMaxBox',
            key: 'nbMaxBox'
        },
        {
            title: 'd:check-position',
            dataIndex: 'checkPosition',
            key: 'checkPosition',
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
            fixed: 'right',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <Button onClick={() => alert(`GO UP `)} icon={<CaretUpOutlined />} />
                    <Button onClick={() => alert(`GO DOWN `)} icon={<CaretDownOutlined />} />
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/equipment/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/equipment/edit/[id]', record.id)}
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
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};
