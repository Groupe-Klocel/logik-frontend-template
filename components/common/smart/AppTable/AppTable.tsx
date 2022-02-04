import { SettingOutlined } from '@ant-design/icons';
import { TableFilter, WrapperFilter } from '@components';
import { getKeys,setCustomColumnsProps} from '@helpers';
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
	const filterDrawerRef = useRef() as any | undefined

	// FILTER   
	const allColumnKeys = getKeys(columns);
	
	// this parentState will be set by its child component TableFilter
	const [visibleColumnKeys, setVisibleColumnKeys] = useState(allColumnKeys);
	const [filteredColumns, setFilteredColumns] = useState(setCustomColumnsProps(columns));
	// table columns filtered
	const [tableColumns, setTableColumns] = useState(setCustomColumnsProps(columns));

	// make wrapper function to give child
	const childSetVisibleColumnKeys = useCallback(val => {
		setVisibleColumnKeys(val);
	}, [setVisibleColumnKeys]);

	// make wrapper function to give child
	const childSetTableColumns = useCallback(val => {
		setFilteredColumns(val);
	}, [setFilteredColumns]);


	function handleReset() {
		setVisibleColumnKeys(allColumnKeys)
		setTableColumns(columns);
		filterDrawerRef!.current.reset(allColumnKeys, columns)
	}

	const dispatchDrawer = useDrawerDispatch();

	const openFilterDrawer = useCallback(
		() => dispatchDrawer({
			size: 700,
			type: 'OPEN_DRAWER',
			title: t('actions:filter'),
			cancelButtonTitle: t('actions:reset'),
			cancelButton: true,
			content: <TableFilter ref={filterDrawerRef} key='filter' colmunsToFilter={filteredColumns} onSort={childSetTableColumns} onShowChange={childSetVisibleColumnKeys} visibleKeys={visibleColumnKeys} />,
			onCancel: () => handleReset(),
		}),
		[dispatchDrawer, visibleColumnKeys]
	)

	useEffect(() => {
		if (visibleColumnKeys) {
			if (visibleColumnKeys.length) {
				const temp = filteredColumns.filter((f:any) => visibleColumnKeys.includes(f.key));
				setTableColumns(temp);
			} else {
				setTableColumns(filteredColumns);
			}
		}
		return () => { };
	}, [visibleColumnKeys, filteredColumns]);

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

