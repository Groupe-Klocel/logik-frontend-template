import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { Articles } from '../modules/Articles/PagesContainer/Articles'

type PageComponent = FC & { layout: typeof MainLayout }

const ArticlesPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<Articles />
		</>
	)
}

ArticlesPage.layout = MainLayout

export default ArticlesPage