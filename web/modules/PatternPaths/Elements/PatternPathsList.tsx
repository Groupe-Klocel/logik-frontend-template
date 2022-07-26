import { AppTable, LinkButton, ContentSpin } from '@components';
import { Space, Button, Modal } from 'antd';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    usePatternPaths,
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
    useDeletePatternMutation,
    useDeletePatternPathMutation,
    DeletePatternPathMutation,
    DeletePatternPathMutationVariables
} from 'generated/graphql';
import { EyeTwoTone, DeleteOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import { useAppState } from 'context/AppContext';

export interface IPatternPathsListProps {
    searchCriteria?: any;
}

const PatternPathsList = ({ searchCriteria }: IPatternPathsListProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [patternPaths, setPatternPaths] = useState<DataQueryType>();

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

    const { isLoading, data, error, refetch } = usePatternPaths(
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
                total: patternPaths?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, patternPaths]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setPatternPaths(data?.patternPaths);
            setPagination({
                ...pagination,
                total: data?.patternPaths?.count
            });
        }
    }, [data]);

    const { mutate: DeleteMutation, isLoading: deleteLoading } = useDeletePatternPathMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeletePatternPathMutation,
                _variables: DeletePatternPathMutationVariables,
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

    const deletePatternPath = ({ id }: DeletePatternMutationVariables) => {
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
            title: 'd:order',
            key: 'order',
            render: (record: {id: string}) => (
                <Space>                    
                    <Button
                        icon={<ArrowUpOutlined />}
                        onClick={() => alert( record.id )}
                    />
                    <Button
                        icon={<ArrowDownOutlined />}
                        onClick={() => alert(record.id)}
                    />
                </Space>
            )
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/pattern-paths/[id]', record.id)}
                    />
                    {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => deletePatternPath({ id: record.id })}
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
            {patternPaths ? (
                <AppTable
                    type="patternPaths"
                    columns={columns}
                    data={patternPaths!.results}
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

export { PatternPathsList };
