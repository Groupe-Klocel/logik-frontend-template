import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddStatusConfig} from '../modules/Feedbacks/PagesContainer/AddStatusConfig'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddStatusConfigPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddStatusConfig/>
		</>
	)
}

AddStatusConfigPage.layout = MainLayout

export default AddStatusConfigPage