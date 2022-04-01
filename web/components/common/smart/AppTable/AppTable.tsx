import { SettingOutlined, FileExcelOutlined } from '@ant-design/icons';
import { TableFilter, WrapperStickyActions, PageTableContentWrapper } from '@components';
import {
    getKeys,
    setCustomColumnsProps,
    checkKeyPresenceInArray,
    formatDigitsForData
} from '@helpers';
import { Space, Button, Table } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useEffect, useState, useRef, Key } from 'react';
import { Resizable } from 'react-resizable';

const { Column } = Table;

export interface IAppTableProps {
    // Refactory to strong type
    type: string;
    data: Array<any> | undefined;
    isLoading?: boolean;
    columns: any[]; //need to find what is wrong with this MyColumnType[],
    scroll?: {
        x?: number | string;
        y?: number | string;
    };
    pagination?: any;
    setPagination?: any;
    stickyActions?: {
        export?: any;
        // delete?: boolean;
    };
    filter?: boolean;
    onChange?: any;
}

const ResizableTitle = (props: { [x: string]: any; onResize: any; width: any }) => {
    const { onResize, width, ...restProps } = props;

    // if (!width) {
    //     return <th {...restProps} />;
    // }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

const AppTable: FC<IAppTableProps> = ({
    onChange,
    stickyActions,
    filter,
    data,
    columns,
    scroll,
    isLoading,
    pagination,
    setPagination,
    type
}: IAppTableProps) => {
    const { t } = useTranslation();
    // get filter from cookies if exist
    const filterDrawerRef = useRef() as any | undefined;
    const allColumnKeys = getKeys(columns);

    let initialState;

    if (data) {
        formatDigitsForData(data);
    }

    if (typeof window !== 'undefined') {
        initialState = localStorage.getItem(`${type}-filter-table`)
            ? JSON.parse(localStorage.getItem(`${type}-filter-table`)!)
            : null;
    }

    if (initialState) {
        const storedArray = initialState.filteredColumns;
        const inputArray = checkKeyPresenceInArray('render', columns);
        const titleCheck = checkKeyPresenceInArray('title', columns);
        const updatedStoredArr = storedArray.map((a: any) => {
            const exists = inputArray.find((b) => a.key == b.key);
            const titles = titleCheck.find((b) => a.key == b.key);
            if (exists) {
                a.render = exists.render;
            }
            if (titles) {
                a.title = titles.title;
            }
            return a;
        });
    }

    const [onSave, setOnSave] = useState<boolean>(false);

    const [visibleColumnKeys, setVisibleColumnKeys] = useState<Key[]>(
        initialState !== null ? initialState.visibleColumnKeys : allColumnKeys
    );
    const [fixedColumns, setFixedColumns] = useState<Key[]>(
        initialState !== null ? initialState.fixedColumns : []
    );
    const [filteredColumns, setFilteredColumns] = useState<any[]>(
        initialState !== null ? initialState.filteredColumns : setCustomColumnsProps(columns)
    );
    const [tableColumns, setTableColumns] = useState<any[]>(
        initialState !== null ? initialState.tableColumns : setCustomColumnsProps(columns)
    );

    // Make each row checkable

    // const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: (selectedRowKeys: Key[], record: any) => {
    //         setSelectedRowKeys(selectedRowKeys);
    //     }
    // };

    // give a deleteMutation to app table to know what data type should be deleted
    // const deleteRecords = () => {
    //     if (Array.isArray(selectedRowKeys) && selectedRowKeys.length) {
    //         // trigger delete mutation
    //         alert(`delete articles ${JSON.stringify(selectedRowKeys)}`);
    //     } else {
    //         showError(t('messages:action-impossible', { name: t('actions:delete') }));
    //     }
    // };

    // make wrapper function to give child

    const childSetVisibleColumnKeys = useCallback(
        (val) => {
            setVisibleColumnKeys(val);
        },
        [setVisibleColumnKeys]
    );

    // make wrapper function to give child
    const childSetFixedColumns = useCallback(
        (val) => {
            setFixedColumns(val);
        },
        [setFixedColumns]
    );

    // make wrapper function to give child
    const childSetTableColumns = useCallback(
        (val) => {
            setFilteredColumns(val);
        },
        [setFilteredColumns]
    );

    const handlePaginationChange = (page: number, pageSize: number) => {
        setPagination(page, pageSize);
    };

    const handleReset = () => {
        setVisibleColumnKeys(allColumnKeys);
        setTableColumns(columns);
        filterDrawerRef!.current.reset(allColumnKeys, setCustomColumnsProps(columns));
    };

    const handleSave = () => {
        setOnSave(true);
        closeDrawer();
    };

    const dispatchDrawer = useDrawerDispatch();

    const closeDrawer = useCallback(
        () => dispatchDrawer({ type: 'CLOSE_DRAWER' }),
        [dispatchDrawer]
    );

    const openFilterDrawer = useCallback(
        () =>
            dispatchDrawer({
                size: 700,
                type: 'OPEN_DRAWER',
                title: 'actions:filter',
                cancelButtonTitle: 'actions:reset',
                cancelButton: true,
                onCancel: () => handleReset(),
                comfirmButtonTitle: 'actions:save',
                comfirmButton: true,
                onComfirm: () => handleSave(),
                content: (
                    <TableFilter
                        ref={filterDrawerRef}
                        columnsToFilter={filteredColumns}
                        visibleKeys={visibleColumnKeys}
                        fixKeys={fixedColumns}
                        onSort={childSetTableColumns}
                        onShowChange={childSetVisibleColumnKeys}
                        onFixed={childSetFixedColumns}
                    />
                )
            }),
        [dispatchDrawer, visibleColumnKeys, filteredColumns]
    );

    useEffect(() => {
        if (visibleColumnKeys) {
            if (visibleColumnKeys.length) {
                const temp = filteredColumns.filter((f: any) => visibleColumnKeys.includes(f.key));
                setTableColumns(temp);
            } else {
                setTableColumns(filteredColumns);
            }
        }

        return () => {};
    }, [visibleColumnKeys, filteredColumns]);

    useEffect(() => {
        if (onSave) {
            const news = JSON.stringify({
                filteredColumns: filteredColumns,
                tableColumns: tableColumns,
                visibleColumnKeys: visibleColumnKeys,
                fixedColumns: fixedColumns
            });
            localStorage.setItem(`${type}-filter-table`, news);
        }
        setOnSave(false);
        return () => {};
    }, [onSave]);

    const handleResize =
        (index: number) =>
        (_e: any, { size }: any) => {
            setTableColumns(() => {
                const nextColumns = [...tableColumns];
                nextColumns[index] = {
                    ...nextColumns[index],
                    width: size.width
                };
                return nextColumns;
            });
        };

    const components = {
        header: {
            cell: ResizableTitle
        }
    };

    const cls = tableColumns.map((col, index) => {
        col.title = t(col.title);
        col.width = col.width ? col.width : 50;
        return {
            ...col,
            onHeaderCell: (column: any) => ({
                width: column.width,
                onResize: handleResize(index)
            })
        };
    });

    return (
        <PageTableContentWrapper>
            <WrapperStickyActions>
                <Space direction="vertical">
                    {/* {stickyActions?.delete && (
                        <Button
                            icon={<DeleteOutlined />}
                            onClick={deleteRecords}
                            type="primary"
                            danger
                        />
                    )} */}
                    {filter && (
                        <Button
                            type="primary"
                            icon={<SettingOutlined />}
                            onClick={() => openFilterDrawer()}
                        />
                    )}
                    {stickyActions?.export.active && (
                        <Button
                            icon={<FileExcelOutlined />}
                            onClick={stickyActions?.export.function}
                        />
                    )}
                </Space>
            </WrapperStickyActions>
            <Table
                rowKey="id"
                dataSource={data}
                scroll={scroll}
                size="small"
                loading={isLoading}
                onChange={onChange}
                // rowSelection={rowSelection}
                pagination={
                    pagination && {
                        position: ['bottomRight'],
                        total: pagination.total,
                        current: pagination.current,
                        pageSize: pagination.itemsPerPage,
                        onChange: (page, pageSize) => {
                            handlePaginationChange(page, pageSize);
                        }
                    }
                }
                components={components}
                columns={cls}
            >
                {/* {tableColumns.map((c) => {
                    console.log('width=', c.width);
                    return (
                        <Column
                            title={t(c.title)}
                            dataIndex={c.dataIndex}
                            key={c.key}
                            fixed={c.fixed}
                            width={c.width}
                            sorter={c.sorter}
                            showSorterTooltip={c.showSorterTooltip}
                            render={c.render}
                        />
                    );
                })} */}
            </Table>
        </PageTableContentWrapper>
    );
};

AppTable.displayName = 'AppTable';

AppTable.defaultProps = {
    stickyActions: {
        export: {
            active: false
        }
        // delete: false
    },
    filter: true,
    scroll: { x: '100%' }
};

export { AppTable };
