import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { setsRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { SetsList } from 'modules/Articles/Elements/SetsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface ISetsProps {

}

export const Sets: FC<ISetsProps> = ({ }: ISetsProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:sets')} routes={setsRoutes} actions={
				<LinkButton title={t('actions:add2',{name:t('menu:article-set')})} path='/add-article-set' />
			} />
			<StyledPageContent>
				<SetsList />
			</StyledPageContent>
		</>
	);
}