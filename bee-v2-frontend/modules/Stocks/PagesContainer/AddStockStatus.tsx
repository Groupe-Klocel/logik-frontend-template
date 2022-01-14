import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { addStockStatusRoutes } from 'modules/Stocks/Static/stocksRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddStockStatusForm } from 'modules/Stocks/Elements/AddStockStatusForm'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddStockStatusProps {

}

export const AddStockStatus: FC<IAddStockStatusProps> = ({ }: IAddStockStatusProps) => {
	let { t } = useTranslation('common')
	return (
		<>
			<HeaderContent title={t('stock-statuses')} routes={addStockStatusRoutes} />
			<StyledPageContent>
				<AddStockStatusForm />
			</StyledPageContent>
		</>
	);
}