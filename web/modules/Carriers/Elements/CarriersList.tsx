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
import { Button, Modal, Space } from 'antd';
import {
    DeleteCarrierMutation,
    DeleteCarrierMutationVariables,
    GetCarriersStatusesConfigsQuery,
    SoftDeleteCarrierMutation,
    SoftDeleteCarrierMutationVariables,
    useDeleteCarrierMutation,
    useGetCarriersStatusesConfigsQuery,
    useSoftDeleteCarrierMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import router from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { resolveProjectReferencePath } from 'typescript';

export type CarriersListTypeProps = {
    searchCriteria?: any;
};
const CarriersList = ({ searchCriteria }: CarriersListTypeProps) => {
    const { t } = useTranslation();
    const name = t('d:name');
    const status = t('d:status');
    const available = t('d:available');
    const code = t('d:code');
    const counter = t('d:counter');
    const to_be_loaded = t('d:toBeLoaded');
    const to_be_palletized = t('d:toBePalletized');
    const use_receipt_number = t('d:useReceiptNumber');
    const parent_carrier = t('common:parentCarrierId');
    const is_virtual = t('d:isVirtual');
    const mono_round_group = t('common:monoroundgroup');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const succesDetetionMessage = t('messages:success-deleted');
    const errorDeletionMessage = t('messages:error-deleting-data');
    const confirmDeletionMessage = t('messages:delete-confirm');
    const confirmationMessage = t('messages:confirm');
    const cancelledMessage = t('messages:cancel');
    const actions = t('actions:actions');
    const submit = t('actions:submit');
    const cancel = t('actions:cancel');

    const [carriers, setCarriers] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const [carrierStatuses, setCarrierStatuses] = useState<any>();

    //To render carriers statuses from config table for the given scope
    const carrierStatusesList = useGetCarriersStatusesConfigsQuery<
        Partial<GetCarriersStatusesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (carrierStatusesList) {
            setCarrierStatuses(carrierStatusesList?.data?.listConfigsForAScope);
        }
    }, [carrierStatusesList]);

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

    const { isLoading, data, error, refetch } = useCarriers(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    // console.log('Donnees : ', data);
    // console.log(
    //     'Use Carrier',
    //     useCarriers(searchCriteria, pagination.current, pagination.itemsPerPage, sort)
    // );

    useEffect(() => {
        if (data) {
            setCarriers(data?.carriers); // set carriers local state with new data
            setPagination({
                ...pagination,
                total: data?.carriers?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };
    //console.log('JND', carriers);
    const { mutate, isLoading: softDeleteLoading } = useSoftDeleteCarrierMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteCarrierMutation,
                _variables: SoftDeleteCarrierMutationVariables,
                _context: any
            ) => {
                if (!softDeleteLoading) {
                    refetch();
                    showSuccess(succesDetetionMessage);
                }
            },
            onError: () => {
                showError(errorDeletionMessage);
            }
        }
    );

    const softDeleteCarrier = ({ carrierId }: SoftDeleteCarrierMutationVariables) => {
        Modal.confirm({
            title: confirmDeletionMessage,
            onOk: () => {
                mutate({ carrierId });
            },
            okText: confirmationMessage,
            cancelText: cancelledMessage
        });
    };

    const columns = [
        {
            title: name,
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: code,
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: available,
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
            title: to_be_loaded,
            dataIndex: 'toBeLoaded',
            key: 'toBeLoaded',
            render: (toBeLoaded: Text) => {
                return toBeLoaded ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: status,
            dataIndex: 'status',
            key: 'status',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false,
            // render: (status: any) =>
            //     status ? carrierStatuses.find((e: any) => e.code == status).text : 'N/A'
            render: (status: any) => carrierStatuses.find((e: any) => e.code == status).text
        },
        {
            title: to_be_palletized,
            dataIndex: 'toBePalletized',
            key: 'toBePalletized',
            render: (toBePalletized: Text) => {
                return toBePalletized ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: use_receipt_number,
            dataIndex: 'useReceiptNumber',
            key: 'useReceiptNumber',
            render: (useReceiptNumber: Text) => {
                return useReceiptNumber ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: is_virtual,
            dataIndex: 'isVirtual',
            key: 'isVirtual',
            render: (isVirtual: Text) => {
                return isVirtual ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: mono_round_group,
            dataIndex: 'monroundgroup',
            key: 'monroundgroup',
            render: (mono_round_group: Text) => {
                return mono_round_group ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: actions,
            key: 'actions',
            render: (record: { id: string; name: string; status: number }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/carrier/[id]', record.id)}
                    />
                    {record.status != 1005 ? (
                        <>
                            <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/carrier/edit/[id]', record.id)}
                            />
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                onClick={() => softDeleteCarrier({ carrierId: record.id })}
                            />
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
