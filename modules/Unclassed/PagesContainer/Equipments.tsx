import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { equipmentsRoutes } from 'modules/Unclassed/Static/routes'
import useTranslation from 'next-translate/useTranslation';
import { EquipmentsList } from 'modules/Unclassed/Elements/EquipmentsList'
import styled from 'styled-components'

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IEquipmentsProps {

}

export const Equipments: FC<IEquipmentsProps> = ({ }: IEquipmentsProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('common:equipments')} routes={equipmentsRoutes} />
			<StyledPageContent>
				<EquipmentsList />
			</StyledPageContent>
		</>
	);
}