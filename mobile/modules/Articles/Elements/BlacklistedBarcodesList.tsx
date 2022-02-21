import { EyeTwoTone, DeleteOutlined} from '@ant-design/icons';
import { Button, Space } from 'antd'
import { AppTable } from '@components';
import { barcodesData } from 'fake-data/barcodes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IBlacklistedBarcodesListProps {

}

export const BlacklistedBarcodesList: FC<IBlacklistedBarcodesListProps> = ({ }) => {
	let { t } = useTranslation()

	const columns = [
		{
			title: t("common:barcode"),
			dataIndex: 'barcode',
			key: 'barcode',
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
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number; name: string; }) => (
				<Space>
				<Button	icon={<EyeTwoTone />}	onClick={() => alert(`View ${record.id} - ${record.name}`)}/>
				<Button icon={<DeleteOutlined />} danger onClick={() => alert(`Delete ${record.id} - ${record.name}`)} />
			</Space>
			),
		},
	];
	return (
		<AppTable
		type="blacklisted-barcodes"
		columns={columns}
		scroll={{ x: 800 }}
		data={barcodesData} />
	);
}