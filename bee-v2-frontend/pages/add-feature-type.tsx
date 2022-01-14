import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddFeatureType} from '../modules/Articles/PagesContainer/AddFeatureType'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddFeatureTypePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddFeatureType/>
		</>
	)
}

AddFeatureTypePage.layout = MainLayout

export default AddFeatureTypePage