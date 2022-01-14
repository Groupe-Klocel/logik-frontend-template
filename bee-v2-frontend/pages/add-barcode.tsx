import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddBarcode} from '../modules/Articles/PagesContainer/AddBarcode'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddBarcodePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddBarcode/>
		</>
	)
}

AddBarcodePage.layout = MainLayout

export default AddBarcodePage