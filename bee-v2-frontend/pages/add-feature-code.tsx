import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddFeatureCode} from '../modules/Articles/PagesContainer/AddFeatureCode'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddFeatureCodePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddFeatureCode/>
		</>
	)
}

AddFeatureCodePage.layout = MainLayout

export default AddFeatureCodePage