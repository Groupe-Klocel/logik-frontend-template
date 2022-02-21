import { FC } from 'react'
import { HeaderContent, LinkButton } from '@components'
import { blacklistedBarcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { BlacklistedBarcodesList } from 'modules/Barcodes/Elements/BlacklistedBarcodesList'

export interface IBlacklistedBarcodesProps {

}

export const BlacklistedBarcodes: FC<IBlacklistedBarcodesProps> = ({ }: IBlacklistedBarcodesProps) => {
	let { t } = useTranslation('menu')
	return (
		<>
			<HeaderContent title={t('blacklisted-barcodes')} routes={blacklistedBarcodesRoutes} />
				<BlacklistedBarcodesList />
		</>
	);
}