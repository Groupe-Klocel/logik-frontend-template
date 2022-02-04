import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Equipments } from '../modules/Unclassed/PagesContainer/Equipments'

type PageComponent = FC & { layout: typeof MainLayout }

const EquipmentsPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<Equipments />
	</>
	)
}

EquipmentsPage.layout = MainLayout

export default EquipmentsPage