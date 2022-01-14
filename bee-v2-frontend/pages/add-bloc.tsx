import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddBloc} from '../modules/Cartography/PagesContainer/AddBloc'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddBlocPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddBloc/>
		</>
	)
}

AddBlocPage.layout = MainLayout

export default AddBlocPage