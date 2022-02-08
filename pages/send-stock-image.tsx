import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const SendStockImagePage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Send Stock Image Page' />
		</>
	)
}

SendStockImagePage.layout = MainLayout

export default SendStockImagePage