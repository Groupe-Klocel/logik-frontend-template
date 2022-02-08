import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const ForceReadingPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Force Reading Page' />
		</>
	)
}

ForceReadingPage.layout = MainLayout

export default ForceReadingPage