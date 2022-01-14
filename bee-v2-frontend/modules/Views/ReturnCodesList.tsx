import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { returnCodesData } from 'fake-data/returnCodes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IReturnCodesListProps {

}

export const ReturnCodesList: FC<IReturnCodesListProps> = ({ }) => {
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
			title: t("type"),
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: t("actions"),
			key: 'actions',
			fixed: 'right',
			render: (record: { id: number; name: string; }) => (
				<Button
					onClick={() => alert(`View ${record.id} - ${record.name}`)}>
					{t("view")}
				</Button>
			),
		},
	];
	return (
		<AppTable columns={columns} data={returnCodesData} />
	);
}