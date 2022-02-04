import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const DashboardPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Dashboard Page' />
		</>
	)
}

DashboardPage.layout = MainLayout

export default DashboardPage