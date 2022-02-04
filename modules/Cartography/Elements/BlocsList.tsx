
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button, Space } from 'antd'
import { blocsData } from 'fake-data/blocs'
import { AppTable } from '@components';

export interface IBlocsListProps {

}

export const BlocsList: FC<IBlocsListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Moveable',
			dataIndex: 'moveable',
			key: 'moveable',
		},
		{
			title: 'Masse',
			dataIndex: 'masse',
			key: 'masse',
		},
		{
			title: 'Comment',
			dataIndex: 'comment',
			key: 'comment',
		},
		{
			title: 'Warehouse Code',
			dataIndex: 'warehouse-code',
			key: 'warehouse-code',
		},
		{
			title: t("actions"),
			key: 'actions',
			render: (record: { id: number }) => (
				<Space>

					<Button
						onClick={() => alert(`View ${record.id} `)}
					>{t("view")}</Button>
					<Button
						onClick={() => alert(`Edit ${record.id} `)}
					>{t("edit")}</Button>
					<Button
						onClick={() => alert(`Delete ${record.id} `)}
					>{t("delete")}</Button>
				</Space>

			),
		},
	];
	return (
		<AppTable
		columns={columns}
		scroll={{ x: 800 }}
		 data={blocsData} />
	);
}