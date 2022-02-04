import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { cartographyRoutes } from 'modules/Cartography/Static/cartographyRoutes'
import useTranslation from 'next-translate/useTranslation';
import { LocationsList } from 'modules/Cartography/Elements/LocationsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface ILocationsProps {

}

export const Locations: FC<ILocationsProps> = ({ }: ILocationsProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:locations')} routes={cartographyRoutes} actions={
				<LinkButton title={t('actions:add2', { name: t('menu:location') })} path='/add-location' />
			} />
			<StyledPageContent>
				<LocationsList />
			</StyledPageContent>
		</>
	);
}