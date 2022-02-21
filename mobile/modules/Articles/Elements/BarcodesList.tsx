import { AppTable } from '@components';
import { Button, Space } from 'antd';
import { barcodesData } from 'fake-data/barcodes';
import useTranslation from 'next-translate/useTranslation';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { FC } from 'react';

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
			title: t("common:preparation-mode"),
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
					<Button	icon={<EyeTwoTone />}	onClick={() => alert(`View ${record.id} - ${record.name}`)}/>
					<Button icon={<PrinterOutlined />} onClick={() => alert(`Print ${record.id} - ${record.name}`)}/>
				</Space>
			),
		},
	];
	return (
		<AppTable
		type="barcodes"
		columns={columns}
		scroll={{ x: 800 }}
		data={barcodesData} />
	);
}