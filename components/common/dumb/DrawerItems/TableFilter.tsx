import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { isVisible, MyColumnType, setCustomColumnsProps } from '@helpers';
import { Button, Space, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import useTranslation from 'next-translate/useTranslation';
import { FC, Key, useEffect, useState, forwardRef, useRef, useImperativeHandle, ClassAttributes, HTMLAttributes, Component, ReactNode } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { MenuOutlined } from '@ant-design/icons';


export interface ITableFilterProps {
	ref: any,
	colmunsToFilter: any, //need to find what is wrong with this MyColumnType[],
	visibleKeys: Key[],
	onShowChange: Function,
	onSort: Function,
}

interface Iindex {
	oldIndex: number;
	newIndex: number;
}

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement((props: JSX.IntrinsicAttributes & ClassAttributes<HTMLTableRowElement> & HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />);
const SortableBody = SortableContainer((props: JSX.IntrinsicAttributes & ClassAttributes<HTMLTableSectionElement> & HTMLAttributes<HTMLTableSectionElement>) => <tbody {...props} />);



const TableFilter: FC<ITableFilterProps> = forwardRef(({ colmunsToFilter, visibleKeys, onShowChange, onSort }: ITableFilterProps, ref) => {
	let { t } = useTranslation()

	const [showKeys, setShowKeys] = useState(visibleKeys);
	const [fixedKeys, setFixedKeys] = useState<Key[]>([]);
	const [currentFilteredColmuns, setDataSource] = useState(colmunsToFilter);

	useImperativeHandle(ref, () => ({
		reset(keys: any, colmuns: any) {
			setShowKeys(keys)
			setDataSource(colmuns)
		},
	}));

	useEffect(() => {
		onShowChange(showKeys);
		return () => { };
	}, [onShowChange, showKeys]);

	useEffect(() => {
		onSort(currentFilteredColmuns);
		return () => { };
	}, [onSort, currentFilteredColmuns]);



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
			let tempColumns = currentFilteredColmuns
			tempColumns = currentFilteredColmuns.map((obj: any) => {
				// change fixed to true
				if (selectedRowKeys.some(r => obj.index === r)) {
					if (obj.index === 0 || obj.index === 1) {
						return { ...obj, fixed: "left" }
					} else if (obj.index === colmunsToFilter.length - 1 || obj.index === colmunsToFilter.length - 2) {
						return { ...obj, fixed: "right" }
					}
				} else {
					return { ...obj, fixed: false }
				}
			})

			setFixedKeys(selectedRowKeys);
			setDataSource(tempColumns);
		},
		getCheckboxProps: (record: MyColumnType) => ({
			disabled: record.disabled, // Column configuration not to be checked
		}),
	}

	const columns = [
		{
			title: t("actions:fixed"),
			dataIndex: 'fixed',
			key: 'fixed',
			width: "1%" // width to minimum possible
		},
		{
			title: t("actions:show-hide"),
			key: 'show-hide',
			render: (record: { title: string, key: Key }) => (
				<Space>
					<Button
						shape="circle"
						icon={isVisible(record.key, showKeys) ? (<EyeTwoTone />) : (<EyeInvisibleTwoTone />)}
						onClick={() => handleVisibleChange(record.key)}
					/>
					<Text>{record.title}</Text>
				</Space>
			),
		},
		{
			title: t("actions:sort"),
			dataIndex: 'sort',
			width: 30,
			className: 'drag-visible',
			render: () => <DragHandle />,
		},
	];


	const onSortEnd = ({ oldIndex, newIndex }: Iindex) => {
		if (oldIndex !== newIndex) {
			const newData = arrayMoveImmutable([].concat(currentFilteredColmuns), oldIndex, newIndex).filter(
				el => !!el,
			);
			const newDataWithNewIndex = setCustomColumnsProps(newData)
			setDataSource(newDataWithNewIndex);
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
		const index = currentFilteredColmuns.findIndex((x: { index: number }) => x.index === restProps['data-row-key']);
		return <SortableItem className="sortableHelper" index={index} {...restProps} />;
	};



	return (
		<>
			<Table
				pagination={false}
				rowSelection={{
					...fixedSelection,
				}}
				columns={columns}
				dataSource={currentFilteredColmuns}
				rowKey="index"
				components={{
					body: {
						wrapper: DraggableContainer,
						row: DraggableBodyRow,
					},
				}} />

		</>
	);
})

TableFilter.displayName = 'TableFilter'

export { TableFilter };


