import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {Locations} from '../modules/Cartography/PagesContainer/Locations'

type PageComponent = FC & { layout: typeof MainLayout} 

const LocationsPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<Locations />
		</>
	)
}

LocationsPage.layout = MainLayout

export default LocationsPage