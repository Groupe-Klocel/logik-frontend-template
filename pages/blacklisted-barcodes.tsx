import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { BlacklistedBarcodes } from '../modules/Barcodes/PagesContainer/BlacklistedBarcodes'

type PageComponent = FC & { layout: typeof MainLayout }

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

