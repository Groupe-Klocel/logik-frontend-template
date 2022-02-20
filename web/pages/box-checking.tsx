import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const BoxCheckingPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Box Checking Page' />
		</>
	)
}

BoxCheckingPage.layout = MainLayout

export default BoxCheckingPage