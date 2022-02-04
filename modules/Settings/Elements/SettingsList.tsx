
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button } from 'antd'
import { settingsData } from 'fake-data/settings'
import { AppTable } from '@components';

export interface ISettingsListProps {

}

export const SettingsList: FC<ISettingsListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("param-category"),
			dataIndex: 'param-category',
			key: 'param-category',
		},
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
			title: t("actions"),
			key: 'actions',
			render: (record: { id: number }) => (
				<Button
					onClick={() => alert(`View ${record.id} `)}
				>{t("view")}</Button>
			),
		},
	];
	return (
		<AppTable
		columns={columns}
		scroll={{ x: 800 }} data={settingsData} />
	);
}