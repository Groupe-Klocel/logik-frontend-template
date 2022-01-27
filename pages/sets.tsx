import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Sets } from '../modules/Articles/PagesContainer/Sets'

type PageComponent = FC & { layout: typeof MainLayout }

const SetsPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<Sets />
		</>
	)
}

SetsPage.layout = MainLayout

export default SetsPage