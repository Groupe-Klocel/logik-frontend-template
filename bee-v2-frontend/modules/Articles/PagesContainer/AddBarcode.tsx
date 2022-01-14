import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { addBarcodeRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddBarcodeForm} from 'modules/Articles/Elements/AddBarcodeForm'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddBarcodeProps {

}

export const AddBarcode: FC<IAddBarcodeProps> = ({ }: IAddBarcodeProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add2',{name:"Barcode"})} routes={addBarcodeRoutes} />
			<StyledPageContent>
				<AddBarcodeForm />
			</StyledPageContent>
		</>
	);
}