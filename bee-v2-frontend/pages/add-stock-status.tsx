import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddStockStatus} from '../modules/Stocks/PagesContainer/AddStockStatus'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddStockStatusPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddStockStatus/>
		</>
	)
}

AddStockStatusPage.layout = MainLayout

export default AddStockStatusPage