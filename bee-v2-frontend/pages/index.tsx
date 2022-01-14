import { FC } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import {Welcome} from '@components'

type PageComponent = FC & { layout: typeof MainLayout} 

const HomePage: PageComponent = () => {
	return (
		<>
			<Welcome/>
		</>
	)
}

HomePage.layout = MainLayout

export default HomePage