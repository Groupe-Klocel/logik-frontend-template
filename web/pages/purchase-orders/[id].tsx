import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SinglePurchaseOrder } from 'modules/PurchaseOrders/PagesContainer/SinglePurchaseOrder';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const PurchaseOrderPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SinglePurchaseOrder router={router} id={id!} />
        </>
    );
};

PurchaseOrderPage.layout = MainLayout;

export default PurchaseOrderPage;
