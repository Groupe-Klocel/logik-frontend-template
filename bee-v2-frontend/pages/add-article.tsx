import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddArticle} from '../modules/Articles/PagesContainer/AddArticle'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddArticlePage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddArticle/>
		</>
	)
}

AddArticlePage.layout = MainLayout

export default AddArticlePage