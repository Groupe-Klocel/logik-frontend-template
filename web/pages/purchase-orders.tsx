import { Welcome } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'

type PageComponent = FC & { layout: typeof MainLayout }

const PurchaseOrdersPage: PageComponent = () => {
	return (
		<>
			<Welcome text='You are on Purchase Orders Page' />
		</>
	)
}

PurchaseOrdersPage.layout = MainLayout

export default PurchaseOrdersPage