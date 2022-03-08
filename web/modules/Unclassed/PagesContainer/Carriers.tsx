import { HeaderContent } from '@components';
import { carriersRoutes } from 'modules/Unclassed/Static/routes';
import useTranslation from 'next-translate/useTranslation';
import { CarriersList } from 'modules/Unclassed/Elements/CarriersList';

export const Carriers = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:carriers')} routes={carriersRoutes} />
            <CarriersList />
        </>
    );
};
