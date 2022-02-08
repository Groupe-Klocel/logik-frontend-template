import {  DeleteOutlined, EyeTwoTone , EditTwoTone} from '@ant-design/icons';
import { Button, Space } from 'antd'
import { AppTable } from '@components';
import { companiesData } from 'fake-data/companies';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IMovementsConfigListProps {

}

export const MovementsConfigList: FC<IMovementsConfigListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("account"),
			dataIndex: 'account',
			key: 'account',
		},
		{
			title: t("company"),
			dataIndex: 'company',
			key: 'company',
		},
		{
			title: t("movement-code"),
			dataIndex: 'movement-code',
			key: 'movement-code',
		},
		{
			title: t("feedback"),
			dataIndex: 'feedback',
			key: 'feedback',
		},
		{
			title: t("custom-value"),
			dataIndex: 'custom-value',
			key: 'custom-value',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number; account: string; }) => (
				<Space>
				<Button	icon={<EyeTwoTone />}	onClick={() => alert(`View ${record.id} - ${record.account}`)}/>
				<Button icon={<EditTwoTone />} 	onClick={() => alert(`Edit ${record.id} - ${record.account}`)} />
				<Button icon={<DeleteOutlined />} danger onClick={() => alert(`Delete ${record.id} - ${record.account}`)} />
		</Space>
			),
		},
	];
	return (
		<AppTable
		type="movements-config"
		columns={columns}
		scroll={{ x: 800 }} 
		data={companiesData} />
	);
}