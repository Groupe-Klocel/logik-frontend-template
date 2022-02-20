import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { GroupsRights } from '../modules/Groups/PagesContainer/GroupsRights'

type PageComponent = FC & { layout: typeof MainLayout }

const GroupsRightsPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<GroupsRights />
		</>
	)
}

GroupsRightsPage.layout = MainLayout

export default GroupsRightsPage