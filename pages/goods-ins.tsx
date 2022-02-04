import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const GoodsInsPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Goods Ins Page' />
		</>
	)
}

GoodsInsPage.layout = MainLayout

export default GoodsInsPage