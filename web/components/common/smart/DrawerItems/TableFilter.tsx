import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { isVisible, MyColumnType, setCustomColumnsProps, showWarning } from '@helpers';
import { Button, Space, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import useTranslation from 'next-translate/useTranslation';
import {
    FC,
    Key,
    useEffect,
    useState,
    forwardRef,
    useRef,
    useImperativeHandle,
    ClassAttributes,
    HTMLAttributes,
    Component,
    ReactNode
} from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { MenuOutlined } from '@ant-design/icons';

export interface ITableFilterProps {
    ref: any;
    columnsToFilter: any; //need to find what is wrong with this MyColumnType[],
    visibleKeys: Key[];
    fixKeys: Key[];
    onShowChange: Function;
    onSort: Function;
    onFixed: Function;
    cookieKey: string;
}

interface Iindex {
    oldIndex: number;
    newIndex: number;
}

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement(
    (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLTableRowElement> &
            HTMLAttributes<HTMLTableRowElement>
    ) => <tr {...props} />
);
const SortableBody = SortableContainer(
    (
        props: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLTableSectionElement> &
            HTMLAttributes<HTMLTableSectionElement>
    ) => <tbody {...props} />
);

const TableFilter: FC<ITableFilterProps> = forwardRef(
    (
        {
            columnsToFilter,
            visibleKeys,
            onShowChange,
            onSort,
            cookieKey,
            fixKeys,
            onFixed
        }: ITableFilterProps,
        ref
    ) => {
        let { t } = useTranslation();

        const [showKeys, setShowKeys] = useState(visibleKeys);
        const [fixedKeys, setFixedKeys] = useState<Key[]>(fixKeys);
        const [currentFilteredColumns, setCurrentFilteredColumns] = useState(columnsToFilter);

        useImperativeHandle(ref, () => ({
            reset(keys: any, columns: any) {
                setShowKeys(keys);
                setFixedKeys([]);
                setCurrentFilteredColumns(columns);
            }
        }));

        useEffect(() => {
            if (showKeys.length === 1 && showKeys[0] === 'actions') {
                setShowKeys(visibleKeys);
                onShowChange(visibleKeys);
                showWarning(t('messages:filter_only_actions_visibles_warn'));
            } else onShowChange(showKeys);

            return () => {};
        }, [onShowChange, showKeys]);

        useEffect(() => {
            onSort(currentFilteredColumns);
            return () => {};
        }, [onSort, currentFilteredColumns]);

        useEffect(() => {
            onFixed(fixedKeys);
            return () => {};
        }, [onFixed, fixedKeys]);

        async function handleVisibleChange(key: Key) {
            const tempList = [...showKeys];
            if (tempList.includes(key)) {
                const index = tempList.indexOf(key);
                tempList.splice(index, 1);
            } else {
                tempList.push(key);
            }
            await setShowKeys(tempList);
        }

        // rowSelection object indicates the need for row selection
        const fixedSelection = {
            selectedRowKeys: fixedKeys,
            onChange: (selectedRowKeys: Key[]) => {
                let tempColumns = currentFilteredColumns;
                tempColumns = currentFilteredColumns.map((obj: any) => {
                    // change fixed to true
                    if (selectedRowKeys.some((r) => obj.index === r)) {
                        if (obj.index === 0 || obj.index === 1) {
                            return { ...obj, fixed: 'left' };
                        } else if (
                            obj.index === columnsToFilter.length - 1 ||
                            obj.index === columnsToFilter.length - 2
                        ) {
                            return { ...obj, fixed: 'right' };
                        }
                    } else {
                        return { ...obj, fixed: false };
                    }
                });
                setFixedKeys(selectedRowKeys);
                setCurrentFilteredColumns(tempColumns);
            },
            getCheckboxProps: (record: MyColumnType) => ({
                disabled: record.disabled // Column configuration not to be checked
            })
        };

        const columns = [
            {
                title: t('actions:fixed'),
                key: 'fixed',
                width: '1%' // width to minimum possible
            },
            {
                title: t('actions:show-hide'),
                key: 'show-hide',
                render: (record: { title: string; key: Key }) => (
                    <Space>
                        <Button
                            shape="circle"
                            icon={
                                isVisible(record.key, showKeys) ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleTwoTone />
                                )
                            }
                            onClick={() => handleVisibleChange(record.key)}
                        />
                        <Text>{record.title}</Text>
                    </Space>
                )
            },
            {
                title: t('actions:sort'),
                dataIndex: 'sort',
                width: 30,
                className: 'drag-visible',
                render: () => <DragHandle />
            }
        ];

        const onSortEnd = ({ oldIndex, newIndex }: Iindex) => {
            if (oldIndex !== newIndex) {
                const newData = arrayMoveImmutable(
                    [].concat(currentFilteredColumns),
                    oldIndex,
                    newIndex
                ).filter((el) => !!el);
                const newDataWithNewIndex = setCustomColumnsProps(newData);
                setFixedKeys([]);
                setCurrentFilteredColumns(newDataWithNewIndex);
            }
        };

        const DraggableContainer = (props: any) => (
            <SortableBody
                useDragHandle
                disableAutoscroll
                helperClass="row-dragging"
                onSortEnd={onSortEnd}
                {...props}
            />
        );

        const DraggableBodyRow = ({ className, style, ...restProps }: any) => {
            // function findIndex base on Table rowKey props and should always be a right array index
            const index = currentFilteredColumns.findIndex(
                (x: { index: number }) => x.index === restProps['data-row-key']
            );
            return <SortableItem className="sortableHelper" index={index} {...restProps} />;
        };

        return (
            <>
                <Table
                    pagination={false}
                    rowSelection={fixedSelection}
                    columns={columns}
                    dataSource={currentFilteredColumns}
                    rowKey="index"
                    components={{
                        body: {
                            wrapper: DraggableContainer,
                            row: DraggableBodyRow
                        }
                    }}
                />
            </>
        );
    }
);

TableFilter.displayName = 'TableFilter';

export { TableFilter };
