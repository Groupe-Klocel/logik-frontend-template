import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd'
import { AppTable } from '@components';
import { carriersData } from 'fake-data/carriers';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface ICarriersListProps {

}

export const CarriersList: FC<ICarriersListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("code"),
			dataIndex: 'code',
			key: 'code',
		},
		{
			title: t("available"),
			dataIndex: 'available',
			key: 'available',
		},
		{
			title: t("to-be-loaded"),
			dataIndex: 'to-be-loaded',
			key: 'to-be-loaded',
		},
		{
			title: t("status"),
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: t("actions"),
			key: 'actions',
			render: (record: { id: number; name: string; }) => (
				<Space>
					<Button
						onClick={() => alert(`View ${record.id} - ${record.name}`)}>
						{t("actions:view")}
					</Button>
					<Button
						onClick={() => alert(`Print ${record.id} - ${record.name}`)}>
						{t("actions:print")}
					</Button>
				</Space>
			),
		},
	];
	return (
		<AppTable columns={columns} data={carriersData} />
	);
}