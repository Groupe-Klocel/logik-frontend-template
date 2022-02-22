import { FC } from 'react';
import { HeaderContent, LinkButton } from '@components';
import { addBarcodeRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddBarcodeForm } from 'modules/Barcodes/Forms/AddBarcodeForm';

export interface IAddBarcodeProps {}

export const AddBarcode: FC<IAddBarcodeProps> = ({}: IAddBarcodeProps) => {
    let { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Barcode' })} routes={addBarcodeRoutes} />
            <AddBarcodeForm />
        </>
    );
};
