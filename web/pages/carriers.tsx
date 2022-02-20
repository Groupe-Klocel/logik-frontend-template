import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Carriers } from '../modules/Unclassed/PagesContainer/Carriers'

type PageComponent = FC & { layout: typeof MainLayout }

const CarriersPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<Carriers />
	</>
	)
}

CarriersPage.layout = MainLayout

export default CarriersPage