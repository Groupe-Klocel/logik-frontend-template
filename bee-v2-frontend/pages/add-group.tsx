import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddGroup} from '../modules/Groups/PagesContainer/AddGroup'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddGroupPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddGroup/>
		</>
	)
}

AddGroupPage.layout = MainLayout

export default AddGroupPage