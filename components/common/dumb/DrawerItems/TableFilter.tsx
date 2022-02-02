import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { isVisible, MyColumnType } from '@helpers';
import { Button, Space, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import useTranslation from 'next-translate/useTranslation';
import { FC, Key, useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { MenuOutlined } from '@ant-design/icons';


export interface ITableFilterProps {
	ref: any,
	toFilter: any[],//need to find what is wrong with this MyColumnType[],
	visibleKeys: Key[],
	onShowChange: Function,
}

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
const SortableItem = SortableElement(props => <tr {...props} />);
const SortableBody = SortableContainer(props => <tbody {...props} />);



const TableFilter: FC<ITableFilterProps> = forwardRef(({ toFilter, visibleKeys, onShowChange }: ITableFilterProps, ref) => {
	let { t } = useTranslation()

	const [showKeys, setShowKeys] = useState(visibleKeys);
	const [dataSource, setDataSource] = useState(toFilter);

	console.log(visibleKeys)

	useImperativeHandle(ref, () => ({
		reset() {
			setShowKeys(visibleKeys)
		}
	}));


	useEffect(() => {
		onShowChange(showKeys);
		return () => { };
	}, [onShowChange, showKeys]);



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
		onChange: (selectedRowKeys: Key[], selectedRows: MyColumnType[]) => {
			console.log(selectedRowKeys)
		},
		getCheckboxProps: (record: MyColumnType) => ({
			disabled: record.disabled, // Column configuration not to be checked
		}),
	};

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


	const onSortEnd = ({ oldIndex, newIndex }) => {
		if (oldIndex !== newIndex) {
			const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter(
				el => !!el,
			);
			console.log('Sorted items: ', newData);
			console.log('Sorted items: ', typeof newData);
			setDataSource(newData);
		}
	};

	const DraggableContainer = (props) => (
		<SortableBody
			useDragHandle
			disableAutoscroll
			helperClass="row-dragging"
			onSortEnd={onSortEnd}
			{...props}
		/>
	);

	const DraggableBodyRow = ({ className, style, ...restProps }) => {
		// function findIndex base on Table rowKey props and should always be a right array index
		const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
		return <SortableItem index={index} {...restProps} />;
	};



	return (
		<>
			<Table
				pagination={false}
				rowSelection={{
					...fixedSelection,
				}}
				columns={columns}
				dataSource={toFilter}
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


