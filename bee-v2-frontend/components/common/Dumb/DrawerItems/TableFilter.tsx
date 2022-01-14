import { Table, Space, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState, useEffect, Key } from 'react'
import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { ColumnType } from 'helpers/types/types'
import { getKeys, isVisible } from 'helpers/utils/utils';

export interface ITableFilterProps {
	toFilter: ColumnType[],
	visibleKeys: Key[],
	onShowChange: Function,
}
/**
 *  Columns 
 * 		Fixed 
 * 		Actions
 * 
 * Need to save showList & fixedSelection for specific user 
 * 
 */


export const TableFilter: FC<ITableFilterProps> = ({ toFilter, visibleKeys, onShowChange }: ITableFilterProps) => {
	let { t } = useTranslation()

	const allKeys = getKeys(toFilter)

	const [showKeys, setShowKeys] = useState(visibleKeys);
	const [loading, setLoading] = useState(false);


	useEffect(() => {
		console.log('childe visiblekeys', visibleKeys)
	}, [visibleKeys]);

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
		onChange: (selectedRowKeys: Key[], selectedRows: ColumnType[]) => {
			console.log(selectedRowKeys)
		},
		getCheckboxProps: (record: ColumnType) => ({
			disabled: record.disabled, // Column configuration not to be checked
		}),
	};

	const columns = [
		{
			title: t("actions:fixed"),
			dataIndex: 'fixed',
			key: 'fixed',
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
	];

	return (
		<>
			<Table
				loading={loading}
				pagination={false}
				rowSelection={{
					...fixedSelection,
				}}
				columns={columns}
				dataSource={toFilter} />
		</>
	);
}