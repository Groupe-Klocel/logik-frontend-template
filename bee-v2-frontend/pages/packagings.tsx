import { AppHead } from '@components'
import { Packagings } from 'modules/Packagings/PagesContainer/pACKAGINGS'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'

type PageComponent = FC & { layout: typeof MainLayout }

const PackagingsPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<Packagings />
		</>
	)
}

PackagingsPage.layout = MainLayout

export default PackagingsPage