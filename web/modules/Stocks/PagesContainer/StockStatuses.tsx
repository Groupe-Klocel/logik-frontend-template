import { HeaderContent } from '@components';
import { stocksRoutes } from 'modules/Stocks/Static/stocksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { StockStatusesList } from 'modules/Stocks/Elements/StockStatusesList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const StockStatuses = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:stock-statuses')}
                routes={stocksRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-stock-status')}
                        path="/add-stock-status"
                        type="primary"
                    />
                }
            />
            <StockStatusesList />
        </>
    );
};
