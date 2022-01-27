import { EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons';
import { isVisible, MyColumnType } from '@helpers';
import { Button, Space, Table } from 'antd';
import Text from 'antd/lib/typography/Text';
import useTranslation from 'next-translate/useTranslation';
import { FC, Key, useEffect, useState } from 'react';

export interface ITableFilterProps {
	toFilter: any[],//need to find what is wrong with this MyColumnType[],
	visibleKeys: Key[],
	onShowChange: Function,
}

const TableFilter: FC<ITableFilterProps> = ({ toFilter, visibleKeys, onShowChange }: ITableFilterProps) => {
	let { t } = useTranslation()

	const [showKeys, setShowKeys] = useState(visibleKeys);

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
				pagination={false}
				rowSelection={{
					...fixedSelection,
				}}
				columns={columns}
				dataSource={toFilter} />
		</>
	);
}

TableFilter.displayName = 'TableFilter'

export { TableFilter };


