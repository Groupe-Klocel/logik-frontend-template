import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd'
import { AppTable } from '@components';
import { stockData } from 'fake-data/stock';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IStockStatusesListProps {

}

export const StockStatusesList: FC<IStockStatusesListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("value"),
			dataIndex: 'value',
			key: 'value',
		},
		{
			title: t("system"),
			dataIndex: 'system',
			key: 'system',
		},
		{
			title: t("comment"),
			dataIndex: 'comment',
			key: 'comment',
		},
		{
			title: t("actions"),
			key: 'actions',
			render: (record: { id: number; name: string; }) => (
				<Space size="small">
					<Button
						onClick={() => alert(`View ${record.id} - ${record.name}`)}>
						{t("view")}
					</Button>
					<Button
						onClick={() => alert(`Edit ${record.id} - ${record.name}`)}>
						{t("edit")}
					</Button>
				</Space>

			),
		},
	];
	return (
		<AppTable columns={columns} data={stockData} />
	);
}