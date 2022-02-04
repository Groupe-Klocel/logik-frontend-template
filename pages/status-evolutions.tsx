import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const StatusEvolutionPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Status Evolution Page' />
		</>
	)
}

StatusEvolutionPage.layout = MainLayout

export default StatusEvolutionPage