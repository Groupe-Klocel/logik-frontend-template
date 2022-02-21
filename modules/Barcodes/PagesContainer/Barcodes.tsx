import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent, LinkButton } from '@components'
import { barcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { BarcodesList } from 'modules/Barcodes/Elements/BarcodesList'

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