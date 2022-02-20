import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { AddArticleSet } from '../modules/Articles/PagesContainer/AddArticleSet'
import { useRouter } from 'next/router';

type PageComponent = FC & { layout: typeof MainLayout }

const AddArticleSetPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<AddArticleSet />
		</>
	)
}

AddArticleSetPage.layout = MainLayout

export default AddArticleSetPage