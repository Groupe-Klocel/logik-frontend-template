import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { barcodesRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { BarcodesList } from 'modules/Articles/Elements/BarcodesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface IBarcodesProps {

}

export const Barcodes: FC<IBarcodesProps> = ({ }: IBarcodesProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('common:barcodes')} routes={barcodesRoutes} actionsRight={
				<LinkButton title={t('actions:add2', { name: t('common:barcode') })} path='/add-barcode' />
			} />
				<BarcodesList />
		</>
	);
}