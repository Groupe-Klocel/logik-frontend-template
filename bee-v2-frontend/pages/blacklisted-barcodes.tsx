import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {BlacklistedBarcodes} from '../modules/Articles/PagesContainer/BlacklistedBarcodes'

type PageComponent = FC & { layout: typeof MainLayout} 

const BlacklistedBarcodesPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<BlacklistedBarcodes />
		</>
	)
}

BlacklistedBarcodesPage.layout = MainLayout

export default BlacklistedBarcodesPage

