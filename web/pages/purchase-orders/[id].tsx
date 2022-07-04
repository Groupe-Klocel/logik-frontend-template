import { AppHead } from '@components';
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
            <AppHead title="Bee V2" />
            <SinglePurchaseOrder router={router} id={id!} />
        </>
    );
};

PurchaseOrderPage.layout = MainLayout;

export default PurchaseOrderPage;
