import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { AddArticle } from '../modules/Articles/PagesContainer/AddArticle'

type PageComponent = FC & { layout: typeof MainLayout }

const AddArticlePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddArticle />
		</>
	)
}

AddArticlePage.layout = MainLayout

export default AddArticlePage