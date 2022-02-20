import {  DeleteOutlined, EyeTwoTone , EditTwoTone} from '@ant-design/icons';
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button, Space } from 'antd'
import { featureCodesData } from 'fake-data/features'
import { AppTable } from '@components';

export interface IFeaturesCodesListProps {

}

export const FeaturesCodesList: FC<IFeaturesCodesListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("common:name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("common:unique"),
			dataIndex: 'unique',
			key: 'unique',
		},
		{
			title: t("forms:date-type"),
			dataIndex: 'date-type',
			key: 'date-type',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number }) => (
				<Space>
					<Button	icon={<EyeTwoTone />}	onClick={() => alert(`View ${record.id} `)}/>
					<Button icon={<EditTwoTone />} 	onClick={() => alert(`Edit ${record.id} `)} />
					<Button icon={<DeleteOutlined />} danger onClick={() => alert(`Delete ${record.id} `)} />
				</Space>

			),
		},
	]

	return (
		<AppTable
		type="features-codes"
		columns={columns}
		scroll={{ x: 800 }}
		data={featureCodesData} />
	);
}