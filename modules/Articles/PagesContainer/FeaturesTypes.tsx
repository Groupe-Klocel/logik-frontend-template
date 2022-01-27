import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { featuresTypesRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { FeaturesTypesList } from 'modules/Articles/Elements/FeaturesTypesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IFeaturesTypesProps {

}

export const FeaturesTypes: FC<IFeaturesTypesProps> = ({ }: IFeaturesTypesProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:features-types')} routes={featuresTypesRoutes} actions={
				<LinkButton title={t('actions:add2',{name:t('menu:feature-type')})} path='/add-feature-type' />
			} />
			<StyledPageContent>
				<FeaturesTypesList />
			</StyledPageContent>
		</>
	);
}