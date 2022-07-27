import { FC } from 'react';
import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { PurchaseOrders } from 'modules/PurchaseOrders/PagesContainer/PurchaseOrders';
import { META_DEFAULTS } from '@helpers';

type PageComponent = FC & { layout: typeof MainLayout };

const PurchaseOrdersPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <PurchaseOrders />
        </>
    );
};

PurchaseOrdersPage.layout = MainLayout;

export default PurchaseOrdersPage;
