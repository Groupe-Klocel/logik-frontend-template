import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPurchaseOrder } from 'modules/PurchaseOrders/PagesContainer/AddPurchaseOrder';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPurchaseOrderPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddPurchaseOrder />
        </>
    );
};

AddPurchaseOrderPage.layout = MainLayout;

export default AddPurchaseOrderPage;
