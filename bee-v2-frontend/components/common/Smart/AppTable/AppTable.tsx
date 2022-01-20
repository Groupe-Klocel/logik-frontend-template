import { FC, useCallback, useState, useEffect } from 'react'
import { Button, Table, Affix, Checkbox, Divider } from 'antd'
import { ColumnType } from 'helpers/types/types';
import { getKeys } from 'helpers/utils/utils';
import { SettingOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';
import { TableFilter } from 'components/common/Dumb/DrawerItems/TableFilter';
import { useDrawerDispatch } from 'helpers/context/DrawerContext';

export interface IAppTableProps {
	// Refactory to strong type
	data: Array<any>,
	columns: ColumnType[],
	scroll?: {
		x?: number,
		y?: number,
	}
}


export const AppTable: FC<IAppTableProps> = ({ data, columns, scroll }) => {
	let { t } = useTranslation()

	// FILTER  

	const allColumnKeys = getKeys(columns);
	const filterData = columns.map((m) => ({ key: m.key, title: m.title, disabled: m.disabled, dataIndex: m.dataIndex }));

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
	}

	const dispatchDrawer = useDrawerDispatch();

	const closeDrawer = useCallback(() => dispatchDrawer({ type: 'CLOSE_DRAWER' }), [
		dispatchDrawer,
	]);

	const openFilterDrawer = useCallback(
		() => dispatchDrawer({
			type: 'OPEN_DRAWER',
			title: t('actions:filter'),
			cancelButtonTitle: t('actions:reset'),
			cancelButton: true,
			content: <TableFilter key='filter' toFilter={filterData} onShowChange={wrapperSetVisibleColumnKeys} visibleKeys={visibleColumnKeys} />,
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
			<Affix offsetTop={140}>
				<Button
					icon={<SettingOutlined />}
					onClick={() => openFilterDrawer()}
				/>
			</Affix>
			<Table rowKey='id' pagination={{ position: ["bottomRight"] }} columns={tableColumns} dataSource={data} scroll={scroll} size="small" />
		</>
	);
}

AppTable.displayName = 'AppTable'

export default AppTable

