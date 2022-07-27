import { HeaderContent } from '@components';
import { addpurchaseOrderLineRoutes } from 'modules/PurchaseOrderLine/Static/purchaseOrderLineRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddPurchaseOrderLineForm } from 'modules/PurchaseOrderLine/Forms/AddPurchaseOrderLineForm';

export const AddPurchaseOrderLine = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'purchase-order-line' })} routes={addpurchaseOrderLineRoutes} />
            <AddPurchaseOrderLineForm />
        </>
    );
};
