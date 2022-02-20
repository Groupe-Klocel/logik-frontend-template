import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { addBlocRoutes } from 'modules/Cartography/Static/cartographyRoutes'
import { AddBlocForm } from 'modules/Cartography/Elements/AddBlocForm'
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components'

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddBlocProps {

}

export const AddBloc: FC<IAddBlocProps> = ({ }: IAddBlocProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add2', { name: "Bloc" })} routes={addBlocRoutes} />
			<StyledPageContent>
				<AddBlocForm />
			</StyledPageContent>
		</>
	);
}