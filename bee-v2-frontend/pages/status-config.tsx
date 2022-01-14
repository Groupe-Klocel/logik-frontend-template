import { AppHead } from '@components'
import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {StatusConfig} from '../modules/Feedbacks/PagesContainer/StatusConfig'

type PageComponent = FC & { layout: typeof MainLayout} 

const StatusConfigPage: PageComponent = () => {
	return (
		<>
		<AppHead title="Bee V2" />
		<StatusConfig />
		</>
	)
}

StatusConfigPage.layout = MainLayout

export default StatusConfigPage