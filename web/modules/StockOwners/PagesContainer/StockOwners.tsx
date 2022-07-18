import { HeaderContent } from '@components';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { StockOwnersList } from '../Elements/StockOwnersList';
import useTranslation from 'next-translate/useTranslation';
import { stockOwnersRoutes } from '../Static/stockOwnersRoutes';

export const StockOwners = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:stock-owners')}
                routes={stockOwnersRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:stock-owner') })}
                        path="/add-stock-owner"
                        type="primary"
                    />
                }
            />
            <StockOwnersList />
        </>
    );
};
