import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd'
import { AppTable } from '@components';
import { packagingsData } from 'fake-data/packagings';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IPackagingsListProps {

}

export const PackagingsList: FC<IPackagingsListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("description"),
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: t("default"),
			dataIndex: 'default',
			key: 'default',
		},
		{
			title: t("dispatchable"),
			dataIndex: 'dispatchable',
			key: 'dispatchable',
		},
		{
			title: t("status"),
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: t("length"),
			dataIndex: 'length',
			key: 'length',
		},
		{
			title: t("width"),
			dataIndex: 'width',
			key: 'width',
		},
		{
			title: t("height"),
			dataIndex: 'height',
			key: 'height',
		},
		{
			title: t("actions"),
			key: 'actions',
			render: (record: { id: number; name: string; }) => (
				<Space>
					<Button
						onClick={() => alert(`View ${record.id} - ${record.name}`)}>
						{t("view")}
					</Button>
					<Button
						onClick={() => alert(`Print ${record.id} - ${record.name}`)}>
						{t("print")}
					</Button>
				</Space>
			),
		},
	];
	return (
		<AppTable columns={columns} data={packagingsData} />
	);
}