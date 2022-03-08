import { HeaderContent } from '@components';
import { addBarcodeRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddBarcodeForm } from 'modules/Barcodes/Forms/AddBarcodeForm';

export const AddBarcode = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Barcode' })} routes={addBarcodeRoutes} />
            <AddBarcodeForm />
        </>
    );
};
