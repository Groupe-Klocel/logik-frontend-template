import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { AddGroup } from '../modules/Groups/PagesContainer/AddGroup'

type PageComponent = FC & { layout: typeof MainLayout }

const AddGroupPage: PageComponent = () => {

	return (
		<>
			<AppHead title="Bee V2" />
			<AddGroup />
		</>
	)
}

AddGroupPage.layout = MainLayout

export default AddGroupPage