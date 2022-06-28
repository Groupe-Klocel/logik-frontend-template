import {
    DeleteOutlined,
    EyeTwoTone,
    EditTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined
} from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import {
    DataQueryType,
    orderByFormater,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    PaginationType,
    useStatusFeedbackOverwrites,
    showSuccess,
    showError,
    pathParams
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import {
    DeleteStatusFeedbackOverwriteMutation,
    DeleteStatusFeedbackOverwriteMutationVariables,
    GetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    GetStatusFeedbackOverwriteStatusConfigsQuery,
    useDeleteStatusFeedbackOverwriteMutation,
    useGetStatusFeedbackOverwriteIdsQuery,
    useGetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    useGetStatusFeedbackOverwriteStatusConfigsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

export type StatusFeedbackOverwritesListTypeProps = {
    searchCriteria?: any;
};

export const StatusFeedbackOverwritesList = ({
    searchCriteria
}: StatusFeedbackOverwritesListTypeProps) => {
    const { t } = useTranslation();

    const [statusFeedbackOverwrites, setStatusFeedbackOverwrites] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const [statusFeedbackOverwriteStatus, setStatusFeedbackOverwriteStatus] = useState<any>();
    const [statusFeedbackOverwriteObjectType, setStatusFeedbackOverwriteObjectType] =
        useState<any>();

    // CONFIG : status
    const statusFeedbackOverwriteStatusList = useGetStatusFeedbackOverwriteStatusConfigsQuery<
        Partial<GetStatusFeedbackOverwriteStatusConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteStatusList) {
            setStatusFeedbackOverwriteStatus(
                statusFeedbackOverwriteStatusList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteStatusList]);

    // CONFIG : object-type
    const statusFeedbackOverwriteObjectTypeList =
        useGetStatusFeedbackOverwriteObjectTypeConfigsQuery<
            Partial<GetStatusFeedbackOverwriteObjectTypeConfigsQuery>,
            Error
        >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteObjectTypeList) {
            setStatusFeedbackOverwriteObjectType(
                statusFeedbackOverwriteObjectTypeList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteObjectTypeList]);

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: statusFeedbackOverwrites?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, statusFeedbackOverwrites]
    );

    const { isLoading, data, error, refetch } = useStatusFeedbackOverwrites(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setStatusFeedbackOverwrites(data?.statusFeedbackOverwrites);
            setPagination({
                ...pagination,
                total: data?.statusFeedbackOverwrites?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteStatusFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteStatusFeedbackOverwriteMutation,
                _variables: DeleteStatusFeedbackOverwriteMutationVariables,
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

    const deleteStatusFeedbackOverwrite = ({
        id
    }: DeleteStatusFeedbackOverwriteMutationVariables) => {
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
            dataIndex: ['stockOwner', 'name'],
            key: ['stockOwner', 'name'],
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'common:object-type',
            dataIndex: 'objectType',
            key: 'object-type',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false,
            render: (objectType: any) =>
                objectType
                    ? statusFeedbackOverwriteObjectType.find((e: any) => e.code == objectType).text
                    : 'N/A'
        },
        {
            title: 'common:status-code',
            dataIndex: 'status',
            key: 'status',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false,
            render: (status: any) =>
                status
                    ? statusFeedbackOverwriteStatus.find((e: any) => e.code == status).text
                    : 'N/A'
        },
        {
            title: 'common:feedback',
            dataIndex: 'feedback',
            key: 'feedback',
            render: (feedback: Text) => {
                return feedback ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            },
            sorter: {
                multiple: 4
            },
            showSorterTooltip: false
        },
        {
            title: 'common:custom-value',
            dataIndex: 'customValue',
            key: 'custom-value',
            sorter: {
                multiple: 5
            },
            showSorterTooltip: false
        },
        {
            title: 'common:system',
            dataIndex: 'system',
            key: 'system',
            render: (system: Text) => {
                return system ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            },
            sorter: {
                multiple: 6
            },
            showSorterTooltip: false
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; account: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/status-feedback-overwrite/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/status-feedback-overwrite/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        loading={deleteLoading}
                        onClick={() => deleteStatusFeedbackOverwrite({ id: record.id })}
                    />
                </Space>
            )
        }
    ];
    return (
        <>
            {statusFeedbackOverwrites ? (
                <AppTable
                    type="status-feedback-overwrites"
                    columns={columns}
                    data={statusFeedbackOverwrites!.results}
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
