import { SettingOutlined } from '@ant-design/icons';
import { TableFilter, WrapperFilter } from '@components';
import { getKeys } from '@helpers';
import { Affix, Button, Table } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useEffect, useState, useRef } from 'react';

export interface IAppTableProps {
	// Refactory to strong type
	data: Array<any> | undefined,
	isLoading?: boolean,
	columns: any[],//need to find what is wrong with this MyColumnType[],
	scroll?: {
		x?: number,
		y?: number,
	},
	pagination?: any
	setPagination?: any
}


const AppTable: FC<IAppTableProps> = ({ data, columns, scroll, isLoading, pagination, setPagination }) => {
	let { t } = useTranslation()
	const filterDrawerRef = useRef()

	// FILTER  

	const allColumnKeys = getKeys(columns);
	const index = 0
	const filterData = columns.map((m) => ({ key: m.key, title: m.title, disabled: m.disabled, dataIndex: m.dataIndex, index: m.index }));

	// this parentState will be set by its child component TableFilter
	const [visibleColumnKeys, setVisibleColumnKeys] = useState(allColumnKeys);

	// make wrapper function to give child
	const wrapperSetVisibleColumnKeys = useCallback(val => {
		setVisibleColumnKeys(val);
	}, [setVisibleColumnKeys]);

	// table columns filtered
	const [tableColumns, setTableColumns] = useState(columns);

	function handleReset() {
		setVisibleColumnKeys(allColumnKeys)
		filterDrawerRef.current.reset()
	}

	const dispatchDrawer = useDrawerDispatch();

	const openFilterDrawer = useCallback(
		() => dispatchDrawer({
			size: 700,
			type: 'OPEN_DRAWER',
			title: t('actions:filter'),
			cancelButtonTitle: t('actions:reset'),
			cancelButton: true,
			content: <TableFilter ref={filterDrawerRef} key='filter' toFilter={filterData} onShowChange={wrapperSetVisibleColumnKeys} visibleKeys={visibleColumnKeys} />,
			onCancel: () => handleReset(),
		}),
		[dispatchDrawer, visibleColumnKeys]
	)

	useEffect(() => {
		if (visibleColumnKeys) {
			if (visibleColumnKeys.length) {
				const temp = columns.filter((f) => visibleColumnKeys.includes(f.key));
				setTableColumns(temp);
			} else {
				setTableColumns(columns);
			}
		}
		return () => { };
	}, [visibleColumnKeys]);



	return (
		<>
			<Affix offsetTop={140} >
				<WrapperFilter>
					<Button
						icon={<SettingOutlined />}
						onClick={() => openFilterDrawer()}
					/>
				</WrapperFilter>
			</Affix>
			<Table rowKey='id'
				columns={tableColumns}
				dataSource={data}
				scroll={scroll}
				size="small"
				loading={isLoading}
				pagination={{
					position: ["bottomRight"],
					total: pagination.total,
					current: pagination.current,
					pageSize: pagination.itemsPerPage,
					onChange: (page, pageSize) => {
						setPagination(page, pageSize)
					}
				}}

			/>
		</>
	);
}

AppTable.displayName = 'AppTable';

export { AppTable };

