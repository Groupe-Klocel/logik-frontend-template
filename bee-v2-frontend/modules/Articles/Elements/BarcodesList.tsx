import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd'
import { AppTable } from '@components';
import { barcodesData } from 'fake-data/barcodes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IBarcodesListProps {

}

export const BarcodesList: FC<IBarcodesListProps> = ({ }) => {
	let { t } = useTranslation()

	const columns = [
		{
			title: t("common:barcode"),
			dataIndex: 'barcode',
			key: 'barcode',
		},
		{
			title: t("common:company"),
			dataIndex: 'company',
			key: 'company',
		},
		{
			title: t("common:product"),
			dataIndex: 'product',
			key: 'product',
		},
		{
			title: t("common:description"),
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: t("common:supplier"),
			dataIndex: 'supplier',
			key: 'supplier',
		},
		{
			title: t("forms:rot"),
			dataIndex: 'rot',
			key: 'rot',
		},
		{
			title: t("forms:preparation-mode"),
			dataIndex: 'preparation-mode',
			key: 'preparation-mode',
		},
		{
			title: t("common:length"),
			dataIndex: 'length',
			key: 'length',
		},
		{
			title: t("common:width"),
			dataIndex: 'width',
			key: 'width',
		},
		{
			title: t("common:height"),
			dataIndex: 'height',
			key: 'height',
		},
		{
			title: t("common:weight"),
			dataIndex: 'weight',
			key: 'weight',
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
						onClick={() => alert(`Print ${record.id} - ${record.name}`)}>
						{t("actions:print")}
					</Button>
					</Space>
			),
		},
	];
	return (
		<AppTable columns={columns} data={barcodesData} />
	);
}