import { HeaderContent } from '@components';
import { addpurchaseOrderRoutes } from 'modules/PurchaseOrders/Static/purchaseOrdersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddPurchaseOrderForm } from 'modules/PurchaseOrders/Forms/AddPurchaseOrderForm';

export const AddPurchaseOrder = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'PurchaseOrder' })} routes={addpurchaseOrderRoutes} />
            <AddPurchaseOrderForm />
        </>
    );
};
