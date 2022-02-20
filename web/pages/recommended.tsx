import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const RecommendedPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Recommended Page' />
		</>
	)
}

RecommendedPage.layout = MainLayout

export default RecommendedPage