import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { GroupOfUsers } from '../modules/Groups/PagesContainer/GroupOfUsers'

type PageComponent = FC & { layout: typeof MainLayout }

const GroupOfUsersPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<GroupOfUsers />
		</>
	)
}

GroupOfUsersPage.layout = MainLayout

export default GroupOfUsersPage