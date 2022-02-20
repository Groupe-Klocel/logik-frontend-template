import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Blocs } from '../modules/Cartography/PagesContainer/Blocs'

type PageComponent = FC & { layout: typeof MainLayout }

const BlocsPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<Blocs />
		</>
	)
}

BlocsPage.layout = MainLayout

export default BlocsPage