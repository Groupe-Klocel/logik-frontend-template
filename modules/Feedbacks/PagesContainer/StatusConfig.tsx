import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { statusConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes'
import useTranslation from 'next-translate/useTranslation';
import { StatusConfigList } from 'modules/Feedbacks/Elements/StatusConfigList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IStatusConfigProps {

}

export const StatusConfig: FC<IStatusConfigProps> = ({ }: IStatusConfigProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('status-config')} routes={statusConfigRoutes} actions={
				<LinkButton title={t('add-status-config-feedback')} path='/add-status-config-feedback' />
			} />
			<StyledPageContent>
				<StatusConfigList />
			</StyledPageContent>
		</>
	);
}