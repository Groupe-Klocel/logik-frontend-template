import {
    CaretUpOutlined,
    CaretDownOutlined,
    EyeTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined,
    EditTwoTone
} from '@ant-design/icons';
import { Button, Space } from 'antd';
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
import { useAuth } from 'context/AuthContext';
import {
    UpdateEquipmentMutation,
    UpdateEquipmentMutationVariables,
    useUpdateEquipmentMutation
} from 'generated/graphql';

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
    const [priorityUpId, setPriorityUpId] = useState<string>();
    const [priorityDownId, setPriorityDownId] = useState<string>();

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

    //Priority up and down management (this part of code could be improved in the next phase by e.g. factorising it)
    const { mutate, isLoading: updateLoading } = useUpdateEquipmentMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateEquipmentMutation,
                _variables: UpdateEquipmentMutationVariables,
                _context: any
            ) => {
                refetch();
                // showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateEquipment = ({ id, input }: UpdateEquipmentMutationVariables) => {
        mutate({ id, input });
    };

    const priorityUp = (id: string) => {
        setPriorityUpId(id);
    };

    const priorityDown = (id: string) => {
        setPriorityDownId(id);
    };

    useEffect(() => {
        const currentEquipment = data?.equipments?.results.find((e: any) => e.id == priorityUpId);
        const currentPriority = currentEquipment?.priority;
        const minusOnePriority = currentPriority ? currentPriority - 1 : undefined;
        const minusOneEquipmentId = data?.equipments?.results.find(
            (e: any) => e.priority == minusOnePriority
        )?.id;
        if (minusOnePriority && priorityUpId) {
            updateEquipment({ id: priorityUpId, input: { priority: minusOnePriority } });
            if (minusOneEquipmentId) {
                updateEquipment({
                    id: minusOneEquipmentId,
                    input: { priority: currentPriority }
                });
            }
        }
    }, [priorityUpId]);

    useEffect(() => {
        const currentEquipment = data?.equipments?.results.find((e: any) => e.id == priorityDownId);
        const currentPriority = currentEquipment?.priority;
        const plusOnePriority = currentPriority ? currentPriority + 1 : undefined;
        const plusOneEquipmentId = data?.equipments?.results.find(
            (e: any) => e.priority == plusOnePriority
        )?.id;
        if (plusOnePriority && priorityDownId) {
            updateEquipment({ id: priorityDownId, input: { priority: plusOnePriority } });
            if (plusOneEquipmentId) {
                updateEquipment({
                    id: plusOneEquipmentId,
                    input: { priority: currentPriority }
                });
            }
        }
    }, [priorityDownId]);

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
            render: (record: { id: string; name: string; priority: number }) => (
                <Space>
                    {record.priority === null ? (
                        <></>
                    ) : (
                        <>
                            <Button
                                onClick={() => priorityUp(record.id)}
                                icon={<CaretUpOutlined />}
                            />
                            <Button
                                onClick={() => priorityDown(record.id)}
                                icon={<CaretDownOutlined />}
                            />
                        </>
                    )}
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/equipment/[id]', record.id)}
                    />
                    {record.priority === null ? (
                        <></>
                    ) : (
                        <>
                            <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/equipment/edit/[id]', record.id)}
                            />
                        </>
                    )}
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
