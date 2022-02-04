
import { FC} from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button } from 'antd'
import { usersData } from 'fake-data/users'
import { AppTable } from '@components';


export interface IUsersListProps {

}

export const UsersList: FC<IUsersListProps> = ({ }) => {
	let { t } = useTranslation()

	const columns = [
		{
			title: t("common:username"),
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: t("common:group"),
			dataIndex: 'group',
			key: 'group',
		},
		{
			title: t("common:status"),
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number; username: string; }) => (
				<Button
					onClick={() => alert(`View ${record.id} - ${record.username}`)}
				>{t("actions:view")}</Button>
			),
		},
	];

	return (
		
		<AppTable
		columns={columns}
		scroll={{ x: 800 }}
		data={usersData}
	/>
	);
}