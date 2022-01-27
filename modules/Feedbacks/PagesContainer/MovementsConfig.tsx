import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { movementsConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes'
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { MovementsConfigList } from 'modules/Feedbacks/Elements/MovementsConfigList'


const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IMovementsConfigProps {

}

export const MovementsConfig: FC<IMovementsConfigProps> = ({ }: IMovementsConfigProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('movements-config')} routes={movementsConfigRoutes} actions={
				<LinkButton title={t('add-movements-config-feedback')} path='/add-movements-config-feedback' />
			} />
			<StyledPageContent>
				<MovementsConfigList />
			</StyledPageContent>
		</>
	);
}

