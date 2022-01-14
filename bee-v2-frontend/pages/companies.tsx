import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {Companies} from '../modules/Companies/PagesContainer/Companies'

type PageComponent = FC & { layout: typeof MainLayout} 

const CompaniesPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<Companies />
		</>
	)
}

CompaniesPage.layout = MainLayout

export default CompaniesPage