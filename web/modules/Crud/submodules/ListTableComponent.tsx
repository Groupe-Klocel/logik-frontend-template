import { AppTable, ContentSpin } from '@components';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useList,
    useExport,
    DataQueryType,
    PaginationType,
    showInfo,
    showError,
    showSuccess,
    orderByFormater
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { ExportFormat } from 'generated/graphql';
import { useState, useEffect, useCallback } from 'react';
import { ModelType } from '../../../models/Models';

export interface IGeneralListProps {
    searchCriteria?: any;
    dataModel: ModelType;
    actionColumns?: any;
    disableFilters?: boolean;
}

const ListTableComponent = (props: IGeneralListProps) => {
    const { t } = useTranslation();

    const [rows, setRows] = useState<DataQueryType>();
    const [columns, setColumns] = useState<Array<any>>([]);

    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data } = useList(
        props.dataModel.resolverName,
        props.dataModel.endpoints.list,
        props.dataModel.listColumns,
        props.searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    // EXPORT DATA SECTION
    const {
        isLoading: exportLoading,
        result: exportResult,
        mutate
    } = useExport(props.dataModel.resolverName, props.dataModel.endpoints.export);

    const exportData = () => {
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

    useEffect(() => {
        if (!(exportResult && exportResult.data)) return;

        if (exportResult.success) {
            showSuccess(t('messages:success-exported'));
        } else {
            showError(t('messages:error-exporting-data'));
        }
    }, [exportResult]);

    // END EXPORT

    const stickyActions = {
        export: {
            active: true,
            function: () => exportData()
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
            let listData: any = data?.[props.dataModel.endpoints.list];
            if (listData && listData['results'] && listData['results'].length > 0) {
                let result_list: Array<any> = [];
                let sort_index: number = 1;
                Object.keys(listData['results'][0]).forEach((column_name) => {
                    let useCols = props.dataModel.listColumns;
                    let sortableColumns = props.dataModel.sortableColumns || [];
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
                    type={props.dataModel.endpoints.list}
                    columns={columns.concat(props.actionColumns)}
                    data={rows!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    stickyActions={stickyActions}
                    onChange={handleTableChange}
                    filter={!props.disableFilters}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { ListTableComponent };
