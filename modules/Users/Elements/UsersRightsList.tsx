import { LockOutlined } from '@ant-design/icons';
import { AppTable } from '@components';
import { Button } from 'antd';
import { usersData } from 'fake-data/users';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IUsersRightsListProps {

}

export const UsersRightsList: FC<IUsersRightsListProps> = ({ }) => {
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
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number }) => (
				<Button
					shape="circle" icon={<LockOutlined />}
					onClick={() => alert(`modify ${record.id}`)}
				/>
			),
		},
	];
	return (
		<AppTable
		columns={columns}
		scroll={{ x: 800 }} data={usersData} />
	);
}