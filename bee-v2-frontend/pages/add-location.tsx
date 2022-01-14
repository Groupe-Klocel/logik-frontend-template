import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddLocation} from '../modules/Cartography/PagesContainer/AddLocation'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddLocationPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddLocation/>
		</>
	)
}

AddLocationPage.layout = MainLayout

export default AddLocationPage