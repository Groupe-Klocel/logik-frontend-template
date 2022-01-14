import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {GroupsRights} from '../modules/Groups/PagesContainer/GroupsRights'

type PageComponent = FC & { layout: typeof MainLayout} 

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