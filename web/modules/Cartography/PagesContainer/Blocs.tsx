import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { cartographyRoutes } from 'modules/Cartography/Static/cartographyRoutes'
import useTranslation from 'next-translate/useTranslation';
import { BlocsList } from 'modules/Cartography/Elements/BlocsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface IBlocsProps {

}

export const Blocs: FC<IBlocsProps> = ({ }: IBlocsProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:blocs')} routes={cartographyRoutes} actionsRight={
				<LinkButton title={t('actions:add2', { name: t('menu:bloc') })} path='/add-bloc' />
			} />
				<BlocsList />
		</>
	);
}