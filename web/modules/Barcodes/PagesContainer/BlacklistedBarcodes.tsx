import { HeaderContent } from '@components';
import { blacklistedBarcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { BlacklistedBarcodesList } from 'modules/Barcodes/Elements/BlacklistedBarcodesList';

export const BlacklistedBarcodes = () => {
    const { t } = useTranslation('menu');
    return (
        <>
            <HeaderContent title={t('blacklisted-barcodes')} routes={blacklistedBarcodesRoutes} />
            <BlacklistedBarcodesList />
        </>
    );
};
