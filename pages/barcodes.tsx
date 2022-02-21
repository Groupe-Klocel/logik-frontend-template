import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Barcodes } from '../modules/Barcodes/PagesContainer/Barcodes'

type PageComponent = FC & { layout: typeof MainLayout }

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