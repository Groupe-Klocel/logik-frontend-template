import { AppHead, AppLayout, Welcome } from '@components'
import { Typography } from 'antd'
import { NextPage } from 'next'

export interface IGroupsPageProps { }

export const GroupsPage: NextPage<IGroupsPageProps> = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<AppLayout>
				<Typography.Title level={3}>
					Welcome to {GroupsPage.displayName}
				</Typography.Title>
			</AppLayout>
		</>
	)
}

GroupsPage.displayName = 'GroupsPage'

export default GroupsPage