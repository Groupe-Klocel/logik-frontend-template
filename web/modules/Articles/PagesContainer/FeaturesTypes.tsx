import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { featuresTypesRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { FeaturesTypesList } from 'modules/Articles/Elements/FeaturesTypesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export interface IFeaturesTypesProps {

}

export const FeaturesTypes: FC<IFeaturesTypesProps> = ({ }: IFeaturesTypesProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:features-types')} routes={featuresTypesRoutes} actionsRight={
				<LinkButton title={t('actions:add2', { name: t('menu:feature-type') })} path='/add-feature-type' />
			} />
				<FeaturesTypesList />
		</>
	);
}