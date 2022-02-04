import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { featuresCodesRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { FeaturesCodesList } from 'modules/Articles/Elements/FeaturesCodesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IFeatureCodesProps {

}

export const FeaturesCodes: FC<IFeatureCodesProps> = ({ }: IFeatureCodesProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:features-codes')} routes={featuresCodesRoutes} actions={
				<LinkButton title={t('actions:add2', { name: t('menu:feature-code') })} path='/add-feature-code' />
			} />
			<StyledPageContent>
				<FeaturesCodesList />
			</StyledPageContent>
		</>
	);
}