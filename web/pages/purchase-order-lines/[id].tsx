import { AppHead } from '@components';
import { SinglePurchaseOrderLine } from 'modules/PurchaseOrderLine/PagesContainer/SinglePurchaseOrderLine';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const PurchaseOrderLinePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SinglePurchaseOrderLine router={router} id={id!}/>
        </>
    );
};

PurchaseOrderLinePage.layout = MainLayout;

export default PurchaseOrderLinePage;
