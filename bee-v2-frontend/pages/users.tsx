import { AppHead, AppLayout, Welcome } from '@components'
import { Typography } from 'antd'
import { NextPage } from 'next'

export interface IUsersPageProps { }

export const UsersPage: NextPage<IUsersPageProps> = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<AppLayout>
				<Typography.Title level={3}>
					Welcome to {UsersPage.displayName}
				</Typography.Title>
			</AppLayout>
		</>
	)
}

UsersPage.displayName = 'UsersPage'

export default UsersPage