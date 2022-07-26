import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPurchaseOrder } from 'modules/PurchaseOrders/PagesContainer/AddPurchaseOrder';
import { META_DEFAULTS } from '@helpers';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPurchaseOrderPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddPurchaseOrder />
        </>
    );
};

AddPurchaseOrderPage.layout = MainLayout;

export default AddPurchaseOrderPage;
