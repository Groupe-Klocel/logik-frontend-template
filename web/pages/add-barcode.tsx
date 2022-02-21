import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { AddBarcode } from '../modules/Barcodes/PagesContainer/AddBarcode'

type PageComponent = FC & { layout: typeof MainLayout }

const AddBarcodePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddBarcode />
		</>
	)
}

AddBarcodePage.layout = MainLayout

export default AddBarcodePage