import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { stocksRoutes } from 'modules/Stocks/Static/stocksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { StockStatusesList } from 'modules/Stocks/Elements/StockStatusesList';
import styled from 'styled-components';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface IStockStatusesProps {}

export const StockStatuses: FC<IStockStatusesProps> = ({}: IStockStatusesProps) => {
    let { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:stock-statuses')}
                routes={stocksRoutes}
                actionsRight={
                    <LinkButton title={t('actions:add-stock-status')} path="/add-stock-status" type="primary"
                    />
                }
            />
            <StockStatusesList />
        </>
    );
};
