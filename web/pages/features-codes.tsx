import { AppHead } from '@components'
import MainLayout from 'components/layouts/MainLayout'
import { FC } from 'react'
import { FeaturesCodes } from '../modules/Articles/PagesContainer/FeaturesCodes'

type PageComponent = FC & { layout: typeof MainLayout }

const FeaturesCodesPage: PageComponent = () => {
	return (
		<>
			<AppHead title="Bee V2" />
			<FeaturesCodes />
		</>
	)
}

FeaturesCodesPage.layout = MainLayout

export default FeaturesCodesPage