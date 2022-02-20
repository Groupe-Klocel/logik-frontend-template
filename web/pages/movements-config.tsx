import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { MovementsConfig } from '../modules/Feedbacks/PagesContainer/MovementsConfig'

type PageComponent = FC & { layout: typeof MainLayout }

const MovementsConfigPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<MovementsConfig />
		</>
	)
}

MovementsConfigPage.layout = MainLayout

export default MovementsConfigPage