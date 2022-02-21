import { SettingOutlined, FileExcelOutlined, DeleteOutlined } from '@ant-design/icons';
import { TableFilter, WrapperStickyActions, PageTableContentWrapper } from '@components';
import { getKeys, setCustomColumnsProps, cookie, checkKeyPresenceInArray, showError } from '@helpers';
import { Space, Button, Table } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useEffect, useState, useRef, Key } from 'react';

export interface IAppTableProps {
	// Refactory to strong type
	type: string;
	data: Array<any> | undefined;
	isLoading?: boolean;
	columns: any[];//need to find what is wrong with this MyColumnType[],
	scroll?: {
		x?: number;
		y?: number;
	},
	pagination?: any;
	setPagination?: any;
	stickyActions?: {
		export?: boolean;
		delete?: boolean;
	} 
}


const AppTable: FC<IAppTableProps> = ({ stickyActions, data, columns, scroll, isLoading, pagination, setPagination, type }) => {
	let { t } = useTranslation()
	// get filter from cookies if exist
	
	const filterDrawerRef = useRef() as any | undefined
	const allColumnKeys = getKeys(columns)

	const initialState = cookie.get(`${type}-filter-table`) ? JSON.parse(cookie.get(`${type}-filter-table`)!) : null

	if (initialState) {
		const storedArray = initialState.filteredColumns
		const inputArray = checkKeyPresenceInArray('render', columns)
		const titleCheck = checkKeyPresenceInArray('title', columns)
		let updatedStoredArr = storedArray.map((a: any) => {
			const exists = inputArray.find(b => a.key == b.key);
			const titles = titleCheck.find(b => a.key == b.key);
			if (exists) {
				a.render = exists.render;
			}
			if(titles){
				a.title = titles.title
			}
			return a;
		});
	}
	
	
	const [onSave, setOnSave] = useState<boolean>(false)
	const [visibleColumnKeys, setVisibleColumnKeys] = useState<Key[]>(initialState !== null ? initialState.visibleColumnKeys : allColumnKeys);
	const [fixedColumns, setFixedColumns] = useState<Key[]>(initialState !== null ? initialState.fixedColumns : []);
	const [filteredColumns, setFilteredColumns] = useState<any[]>(initialState !== null ? initialState.filteredColumns : setCustomColumnsProps(columns));
	const [tableColumns, setTableColumns] = useState<any[]>(initialState !== null ? initialState.tableColumns : setCustomColumnsProps(columns));

	const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
	console.log('tableColumns changed: ', tableColumns);
	console.log('filteredColumns changed: ', filteredColumns);

	const rowSelection = {
		selectedRowKeys,
		onChange: (selectedRowKeys: Key[], record: any) => {
			console.log('selectedRowKeys changed: ', selectedRowKeys);
			setSelectedRowKeys(selectedRowKeys)
		}
	};
	// make wrapper function to give child
	const childSetVisibleColumnKeys = useCallback(val => {
		setVisibleColumnKeys(val);
	}, [setVisibleColumnKeys]);

	// make wrapper function to give child
	const childSetFixedColumns = useCallback(val => {
		setFixedColumns(val);
	}, [setFixedColumns]);

	// make wrapper function to give child
	const childSetTableColumns = useCallback(val => {
		setFilteredColumns(val);
	}, [setFilteredColumns]);


	const handleReset = () => {
		setVisibleColumnKeys(allColumnKeys)
		setTableColumns(columns);
		filterDrawerRef!.current.reset(allColumnKeys, setCustomColumnsProps(columns))
	}

	
	const handleSave = () => {
		setOnSave(true)
		closeDrawer()
	}

	// give a deleteMutation to app table to know what data type should be deleted
	const deleteRecords = () => {
		if (Array.isArray(selectedRowKeys) && selectedRowKeys.length) {
			// trigger delete mutation
			alert(`delete articles ${JSON.stringify(selectedRowKeys)}`);
		} else {
			showError(t('messages:action-impossible', { name: t('actions:delete') }))
		}
	}

	const dispatchDrawer = useDrawerDispatch();

	const closeDrawer = useCallback(() => dispatchDrawer({ type: 'CLOSE_DRAWER' }), [
		dispatchDrawer,
	]);

	const openFilterDrawer = useCallback(
		() => dispatchDrawer({
			size: 700,
			type: 'OPEN_DRAWER',
			title: t('actions:filter'),
			cancelButtonTitle: t('actions:reset'),
			cancelButton: true,
			onCancel: () => handleReset(),
			comfirmButtonTitle: t('actions:save'),
			comfirmButton: true,
			onComfirm: () => handleSave(),
			content:
				<TableFilter
					ref={filterDrawerRef}
					cookieKey={type}
					columnsToFilter={filteredColumns}
					visibleKeys={visibleColumnKeys}
					fixKeys={fixedColumns}
					onSort={childSetTableColumns}
					onShowChange={childSetVisibleColumnKeys}
					onFixed={childSetFixedColumns}
				/>,
		}),
		[dispatchDrawer, visibleColumnKeys]
	)

	useEffect(() => {
		if (visibleColumnKeys) {
			if (visibleColumnKeys.length) {
				const temp = filteredColumns.filter((f: any) => visibleColumnKeys.includes(f.key));
				setTableColumns(temp);
			} else {
				setTableColumns(filteredColumns);
			}
		}

		return () => { };
	}, [visibleColumnKeys, filteredColumns]);

	useEffect(() => {
		if (onSave) {
			cookie.set(`${type}-filter-table`, JSON.stringify({
				filteredColumns: filteredColumns,
				tableColumns: tableColumns,
				visibleColumnKeys: visibleColumnKeys,
				fixedColumns: fixedColumns
			}))
		}
		setOnSave(false)
		return () => { };
	}, [onSave]);

	return (
		<PageTableContentWrapper>
					<WrapperStickyActions>
				<Space direction="vertical">
					<Button
						type="primary"
						icon={<SettingOutlined />}
						onClick={() => openFilterDrawer()}
						/>
					{stickyActions!.delete && <Button icon={<DeleteOutlined />} onClick={deleteRecords} type="primary" danger />}
					{stickyActions!.export &&  <Button icon={<FileExcelOutlined />} onClick={() => alert("trigger export")} /> }
				</Space>
			</WrapperStickyActions>
			<Table
				rowKey='id'
				columns={tableColumns}
				dataSource={data}
				scroll={scroll}
				size="small"
				loading={isLoading}
				rowSelection={rowSelection}
				pagination={pagination && {
					position: ["bottomRight"],
					total: pagination.total,
					current: pagination.current,
					pageSize: pagination.itemsPerPage,
					onChange: (page, pageSize) => {
						setPagination(page, pageSize)
					}
				}}

			/>
		</PageTableContentWrapper>
	);
}

AppTable.displayName = 'AppTable';

AppTable.defaultProps = {
	stickyActions: {
		export: false, 
		delete: false
	} 
};

export { AppTable };