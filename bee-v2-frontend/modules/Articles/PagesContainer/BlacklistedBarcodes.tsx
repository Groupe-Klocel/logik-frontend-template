import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { blacklistedBarcodesRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { BlacklistedBarcodesList } from 'modules/Articles/Elements/BlacklistedBarcodesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IBlacklistedBarcodesProps {

}

export const BlacklistedBarcodes: FC<IBlacklistedBarcodesProps> = ({ }: IBlacklistedBarcodesProps) => {
	let { t } = useTranslation('menu')
	return (
		<>
			<HeaderContent title={t('blacklisted-barcodes')} routes={blacklistedBarcodesRoutes} />
			<StyledPageContent>
				<BlacklistedBarcodesList />
			</StyledPageContent>
		</>
	);
}