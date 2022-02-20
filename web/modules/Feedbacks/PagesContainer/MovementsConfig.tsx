import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { movementsConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes'
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { MovementsConfigList } from 'modules/Feedbacks/Elements/MovementsConfigList'


export interface IMovementsConfigProps {

}

export const MovementsConfig: FC<IMovementsConfigProps> = ({ }: IMovementsConfigProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:movements-config')} routes={movementsConfigRoutes} actionsRight={
				<LinkButton title={t('actions:add-movements-config-feedback')} path='/add-movements-config-feedback' />
			} />
				<MovementsConfigList />
		</>
	);
}

