import { FC } from 'react';
import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { PurchaseOrders } from 'modules/PurchaseOrders/PagesContainer/PurchaseOrders';

type PageComponent = FC & { layout: typeof MainLayout };

const PurchaseOrdersPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <PurchaseOrders />
        </>
    );
};

PurchaseOrdersPage.layout = MainLayout;

export default PurchaseOrdersPage;
