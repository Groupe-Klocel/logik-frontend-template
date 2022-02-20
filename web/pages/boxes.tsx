import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const BoxesPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Boxes Page' />
		</>
	)
}

BoxesPage.layout = MainLayout

export default BoxesPage