import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { AddFeatureCode } from '../modules/Articles/PagesContainer/AddFeatureCode'

type PageComponent = FC & { layout: typeof MainLayout }

const AddFeatureCodePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddFeatureCode />
		</>
	)
}

AddFeatureCodePage.layout = MainLayout

export default AddFeatureCodePage