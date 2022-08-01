import { SearchOutlined } from '@ant-design/icons';
import { AppTable, ContentSpin, HeaderContent, LinkButton } from '@components';
import { Space, Form, Button } from 'antd';
import { DeleteOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { DataQueryType, DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, getModesFromPermissions, orderByFormater, PaginationType, showError, showInfo, showSuccess, useDelete, useExport, useList } from '@helpers';
import { useCallback, useEffect, useState } from 'react';
import { ListSearchComponent } from './submodules/ListSearchComponent';
import { ModelType } from 'models/Models';
import { useAppState } from 'context/AppContext';
import { ExportFormat, ModeEnum } from 'generated/graphql';

export type HeaderData = {
    title: string;
    routes: Array<any>;
    actionsComponent: any;
};
export interface IListProps {
    dataModel: ModelType;
    actionColumns?: any;
    headerData?: HeaderData;
    routeDetailPage?: string;
    searchable?: boolean;
    searchCriteria?: any;
}

const ListComponent = (props: IListProps) => {
    const { permissions } = useAppState();
    const modes = getModesFromPermissions(permissions, props.dataModel.tableName);
    const { t } = useTranslation();


    // #region DEFAULT PROPS
    const defaultProps = {
        searchable: true,
        searchCriteria: {},
        actionColumns: [
            {
                title: 'actions:actions',
                key: 'actions',
                render: (record: { id: string }) => (
                    <Space>
                        <LinkButton
                            icon={<EyeTwoTone />}
                            path={(props.routeDetailPage || "").replace(':id', record.id)}
                        />
                        {modes.length > 0 && modes.includes(ModeEnum.Write) ? (
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                onClick={() => callDelete(record.id)}
                            />
                        ) : (
                            <></>
                        )}
                    </Space>
                )
            }
        ]
    };
    props = { ...defaultProps, ...props };

    // #endregion
    

    // #region DELETE MUTATION
    const {
        isLoading: deleteLoading,
        result: deleteResult,
        mutate: callDelete
    } = useDelete(props.dataModel.endpoints.delete);

    useEffect(() => {
        if (deleteLoading) {
            showInfo(t('messages:info-delete-wip'));
        }
    }, [deleteLoading]);

    useEffect(() => {
        if (!(deleteResult && deleteResult.data)) return;

        if (deleteResult.success) {
            showSuccess(t('messages:success-deleted'));
            reloadData();
        } else {
            showError(t('messages:error-deleting-data'));
        }
    }, [deleteResult]);
    // #endregion

    // #region SEARCH OPERATIONS
    const [search, setSearch] = useState(props.searchCriteria);

    //	Search Drawer
    const [formSearch] = Form.useForm();

    const dispatchDrawer = useDrawerDispatch();

    const openSearchDrawer = useCallback(
        () =>
            dispatchDrawer({
                size: 450,
                type: 'OPEN_DRAWER',
                title: 'actions:search',
                comfirmButtonTitle: 'actions:search',
                comfirmButton: true,
                cancelButtonTitle: 'actions:reset',
                cancelButton: true,
                submit: true,
                content: (
                    <ListSearchComponent
                        form={formSearch}
                        columns={props.dataModel.filterFields || []}
                    />
                ),
                onCancel: () => handleReset(),
                onComfirm: () => handleSubmit()
            }),
        [dispatchDrawer]
    );

    const closeDrawer = useCallback(
        () => dispatchDrawer({ type: 'CLOSE_DRAWER' }),
        [dispatchDrawer]
    );

    const handleReset = () => {
        formSearch.resetFields();
    };

    const handleSubmit = () => {
        formSearch
            .validateFields()
            .then(() => {
                // Here make api call of something else
                setSearch(formSearch.getFieldsValue(true));
                closeDrawer();
            })
            .catch((err) => showError(t('messages:error-getting-data')));
    };

    // #endregion

    // #region DATATABLE
    const [rows, setRows] = useState<DataQueryType>();
    const [columns, setColumns] = useState<Array<any>>([]);

    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, reload: reloadData } = useList(
        props.dataModel.resolverName,
        props.dataModel.endpoints.list,
        props.dataModel.listFields,
        search,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        reloadData();
    }, [search, pagination.current, pagination.itemsPerPage, sort]);

    // #endregion

    // #region EXPORT DATA
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
            filters: search
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

    // #endregion

    // #region TABLE ACTIONS
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
            // if data is refreshed
            let listData: any = data?.[props.dataModel.endpoints.list];
            if (listData && listData['results'] && listData['results'].length > 0) {
                let result_list: Array<any> = [];
                let sort_index: number = 1;

                // iterate over the first result and get list of columns to define table structure
                Object.keys(listData['results'][0]).forEach((column_name) => {
                    let useCols = props.dataModel.listFields;
                    let sortableFields = props.dataModel.sortableFields || [];
                    if (useCols.length > 0 && !useCols.includes(column_name)) return;

                    let row_data: any = {
                        title: `d:${column_name}`,
                        dataIndex: column_name,
                        key: column_name,
                        showSorterTooltip: false
                    };
                    // if column is in sortable list add sorter property
                    if (sortableFields.length > 0 && sortableFields.includes(column_name)) {
                        row_data['sorter'] = { multiple: sort_index };
                        row_data['showSorterTooltip'] = false;
                        sort_index++;
                    }

                    result_list.push(row_data);
                });
                // set columns to use in table
                setColumns(result_list);
                // set data for the table
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
    
    // #endregion
    return (
        <>
            {(props.headerData)? <HeaderContent
                title={props.headerData.title}
                routes={props.headerData.routes}
                actionsRight={
                    <Space>
                        {props.searchable ? <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} /> : <></>}
                        {props.headerData.actionsComponent != null ? (
                            props.headerData.actionsComponent
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            /> : <></>}
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
                />
            ) : (
                <ContentSpin />
            )}            
        </>
    );
};

ListComponent.displayName = 'ListWithFilter';
export { ListComponent };
