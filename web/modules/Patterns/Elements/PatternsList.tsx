import { AppTable, LinkButton, ContentSpin } from '@components';
import { Space, Button, Modal } from 'antd';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    usePatterns,
    pathParams,
    DataQueryType,
    PaginationType,
    showInfo,
    showError,
    showSuccess,
    orderByFormater
} from '@helpers';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import {
    ExportFormat,
    Table,
    ModeEnum,
    DeletePatternMutation,
    DeletePatternMutationVariables,
    useDeletePatternMutation
} from 'generated/graphql';
import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import { useAppState } from 'context/AppContext';

export interface IPatternsListProps {
    searchCriteria?: any;
}

const PatternsList = ({ searchCriteria }: IPatternsListProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [patterns, setPatterns] = useState<DataQueryType>();

    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.Pattern;
        })?.mode;

    const { isLoading, data, error, refetch } = usePatterns(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: patterns?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, patterns]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setPatterns(data?.patterns);
            setPagination({
                ...pagination,
                total: data?.patterns?.count
            });
        }
    }, [data]);

    const { mutate: DeleteMutation, isLoading: deleteLoading } = useDeletePatternMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeletePatternMutation,
                _variables: DeletePatternMutationVariables,
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

    const deletePattern = ({ id }: DeletePatternMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                DeleteMutation({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    // to refactor to be automatique when fetching data
    const columns = [
        {
            title: 'd:stockOwner',
            dataIndex: 'stockOwnerId',
            key: 'stockOwnerId',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:Type',
            dataIndex: 'patternTypeText',
            key: 'patternTypeText',
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
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/patterns/[id]', record.id)}
                    />
                    {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => deletePattern({ id: record.id })}
                        />
                    ) : (
                        <></>
                    )}
                </Space>
            )
        }
    ];

    return (
        <>
            {patterns ? (
                <AppTable
                    type="patterns"
                    columns={columns}
                    data={patterns!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    // stickyActions={stickyActions}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { PatternsList };
