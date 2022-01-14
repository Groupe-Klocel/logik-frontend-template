import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {Settings} from '../modules/Settings/PagesContainer/Settings'

type PageComponent = FC & { layout: typeof MainLayout} 

const SettingsPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<Settings />
		</>
	)
}

SettingsPage.layout = MainLayout

export default SettingsPage