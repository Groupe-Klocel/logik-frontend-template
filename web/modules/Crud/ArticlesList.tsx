import { AppTable, LinkButton, ContentSpin } from '@components';
import { Space, Button } from 'antd';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useList,
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
    ExportArticlesMutationVariables,
    ExportArticlesMutation,
    useExportArticlesMutation,
    ExportFormat,
    Table,
    ModeEnum
} from 'generated/graphql';
import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import { useAppState } from 'context/AppContext';

export interface IArticlesListProps {
    searchCriteria?: any;
    useColumns?: Array<string>;
    sortableColumns?: Array<string>;
    query: string;
}

const ListComponent = (props: IArticlesListProps) => {
    const defaultProps = {
        useColumns: [],
        sortableColumns: []
    };
    props = { ...defaultProps, ...props };

    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [articles, setArticles] = useState<DataQueryType>();
    const [columns, setColumns] = useState<Array<any>>([]);

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
            return p.table.toUpperCase() == Table.Article;
        })?.mode;

    const { isLoading, data } = useList(
        props.useColumns!,
        props.searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    //Object.keys(data['articles']['results'][0]).toString()
    // EXPORT ARTICLES SECTION
    const {
        mutate,
        isLoading: exportLoading,
        data: exportData
    } = useExportArticlesMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: ExportArticlesMutation,
            _variables: ExportArticlesMutationVariables,
            _context: any
        ) => {
            showSuccess(t('messages:success-exported'));
        },
        onError: () => {
            showError(t('messages:error-exporting-data'));
        }
    });

    const exportArticles = () => {
        mutate({
            format: ExportFormat.Csv,
            compression: null,
            separator: ',',
            orderBy: sort,
            filters: props.searchCriteria
        });
    };

    useEffect(() => {
        if (exportLoading) {
            showInfo(t('messages:info-export-wip'));
        }
    }, [exportLoading]);

    // END EXPORT

    const stickyActions = {
        export: {
            active: true,
            function: () => exportArticles()
        }
    };

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: articles?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, articles]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            if (data?.articles && data?.articles?.results && data.articles.results.length > 0) {
                let result_list: Array<any> = [];
                let sort_index: number = 1;
                Object.keys(data.articles.results[0]).forEach((column_name) => {
                    let useCols = props.useColumns!;
                    let sortableColumns = props.sortableColumns!;
                    if (useCols.length > 0 && !useCols.includes(column_name)) return;

                    let row_data: any = {
                        title: `d:${column_name}`,
                        dataIndex: column_name,
                        key: column_name,
                        showSorterTooltip: false
                    };
                    if (sortableColumns.length > 0 && sortableColumns.includes(column_name)) {
                        row_data['sorter'] = { multiple: sort_index };
                        row_data['showSorterTooltip'] = false;
                        sort_index++;
                    }

                    result_list.push(row_data);
                });
                setColumns(result_list);
            }
            setArticles(data?.articles);
            setPagination({
                ...pagination,
                total: data?.articles?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const static_columns = [
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/article/[id]', record.id)}
                    />
                    {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => alert(`delete article N° ${record.id}`)}
                        />
                    ) : (
                        <></>
                    )}
                </Space>
            )
        }
    ];

    // to refactor to be automatique when fetching data
    const columns_deprecated_old = [
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
            title: 'd:additionalDescription',
            dataIndex: 'additionalDescription',
            key: 'additionalDescription',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:code',
            dataIndex: 'code',
            key: 'code',
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
            title: 'd:length',
            dataIndex: 'length',
            key: 'length'
        },
        {
            title: 'd:width',
            dataIndex: 'width',
            key: 'width'
        },
        {
            title: 'd:height',
            dataIndex: 'height',
            key: 'height'
        },
        {
            title: 'd:baseUnitWeight',
            dataIndex: 'baseUnitWeight',
            key: 'baseUnitWeight'
        },
        {
            title: 'd:boxWeight',
            dataIndex: 'boxWeight',
            key: 'boxWeight'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/article/[id]', record.id)}
                    />
                    {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => alert(`delete article N° ${record.id}`)}
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
            {articles ? (
                <AppTable
                    type="articles"
                    columns={columns.concat(static_columns)}
                    data={articles!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    stickyActions={stickyActions}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { ListComponent };
