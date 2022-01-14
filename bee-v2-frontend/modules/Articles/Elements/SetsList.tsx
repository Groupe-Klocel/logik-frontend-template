import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { setsData } from 'fake-data/sets';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface ISetsListProps {

}

export const SetsList: FC<ISetsListProps> = ({ }) => {
	let { t } = useTranslation()

	const columns = [
		{
			title: t("common:company"),
			dataIndex: 'company',
			key: 'company',
		},
		{
			title: t("common:name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("common:article"),
			dataIndex: 'article',
			key: 'article',
		},
		{
			title: t("forms:product-description"),
			dataIndex: 'product-description',
			key: 'product-description',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number; name: string; }) => (
				<Space>
					<Button
						onClick={() => alert(`View ${record.id} - ${record.name}`)}>
						{t("actions:view")}
					</Button>
					<Button
						onClick={() => alert(`Edit ${record.id} - ${record.name}`)}>
						{t("actions:edit")}
					</Button>
					<Button
						onClick={() => alert(`Delete ${record.id} - ${record.name}`)}>
						{t("actions:delete")}
					</Button>
					</Space>
			),
		},
	];
	return (
		<AppTable columns={columns} data={setsData} />
	);
}