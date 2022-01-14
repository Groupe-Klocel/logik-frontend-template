import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {UsersRights} from '../modules/Users/PagesContainer/UsersRights'

type PageComponent = FC & { layout: typeof MainLayout} 

const UsersRightsPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<UsersRights />
		</>
	)
}

UsersRightsPage.layout = MainLayout

export default UsersRightsPage