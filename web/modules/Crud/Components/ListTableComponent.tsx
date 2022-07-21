import { AppTable, ContentSpin } from '@components';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useList,
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

export interface IGeneralListProps {
    searchCriteria?: any;
    useColumns: Array<string>;
    sortableColumns: Array<string>;
    queryName: string;
    resolverName: string;
    actionColumns?: any;
}

const ListTableComponent = (props: IGeneralListProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [rows, setRows] = useState<DataQueryType>();
    const [columns, setColumns] = useState<Array<any>>([]);

    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data } = useList(
        props.resolverName,
        props.queryName,
        props.useColumns,
        props.searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

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
                total: rows?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, rows]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            let listData: any = data?.[props.queryName];
            if (listData && listData['results'] && listData['results'].length > 0) {
                let result_list: Array<any> = [];
                let sort_index: number = 1;
                Object.keys(listData['results'][0]).forEach((column_name) => {
                    let useCols = props.useColumns;
                    let sortableColumns = props.sortableColumns;
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
                setRows(listData);
                setPagination({
                    ...pagination,
                    total: listData['count']
                });
            }
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    return (
        <>
            {rows ? (
                <AppTable
                    type={props.queryName}
                    columns={columns.concat(props.actionColumns)}
                    data={rows!.results}
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

export { ListTableComponent };
