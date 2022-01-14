import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {Barcodes} from '../modules/Articles/PagesContainer/Barcodes'

type PageComponent = FC & { layout: typeof MainLayout} 

const BarcodesPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<Barcodes />
		</>
	)
}

BarcodesPage.layout = MainLayout

export default BarcodesPage