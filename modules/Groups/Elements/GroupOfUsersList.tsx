import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { AppTable } from '@components';
import { usersData } from 'fake-data/users';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IGroupOfUsersListProps {

}

export const GroupOfUsersList: FC<IGroupOfUsersListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("username"),
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: t("administator"),
			key: 'admin',
			render: (record: { admin: boolean; }) => {

				return record.admin ? <CheckCircleOutlined style={{ color: 'green' }} /> : <CloseSquareOutlined style={{ color: 'red' }} />
			}
		},
		{
			title: t("operator"),
			key: 'ope',
			render: (record: { ope: boolean; }) => {

				return record.ope ? <CheckCircleOutlined style={{ color: 'green' }} /> : <CloseSquareOutlined style={{ color: 'red' }} />
			}
		},
		{
			title: t("prepers"),
			key: 'prep',
			render: (record: { prep: boolean; }) => {

				return record.prep ? <CheckCircleOutlined style={{ color: 'green' }} /> : <CloseSquareOutlined style={{ color: 'red' }} />
			}
		},
	];
	return (
		<AppTable
		columns={columns}
		scroll={{ x: 800 }} data={usersData} />
	);
}