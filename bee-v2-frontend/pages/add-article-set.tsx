import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {AddArticleSet} from '../modules/Articles/PagesContainer/AddArticleSet'

type PageComponent = FC & { layout: typeof MainLayout} 

const AddArticleSetPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddArticleSet/>
		</>
	)
}

AddArticleSetPage.layout = MainLayout

export default AddArticleSetPage