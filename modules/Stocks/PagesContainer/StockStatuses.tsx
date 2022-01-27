import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { stocksRoutes } from 'modules/Stocks/Static/stocksRoutes'
import useTranslation from 'next-translate/useTranslation';
import { StockStatusesList } from 'modules/Stocks/Elements/StockStatusesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IStockStatusesProps {

}

export const StockStatuses: FC<IStockStatusesProps> = ({ }: IStockStatusesProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('stock-statuses')} routes={stocksRoutes}  actions={
				<LinkButton title={t('add-stock-status')} path='/add-stock-status' />
			} />
			<StyledPageContent>
				<StockStatusesList />
			</StyledPageContent>
		</>
	);
}