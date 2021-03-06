import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditPurchaseOrder } from 'modules/PurchaseOrders/PagesContainer/EditPurchaseOrder';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditPurchaseOrderPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditPurchaseOrder router={router} id={id!} />
        </>
    );
};

EditPurchaseOrderPage.layout = MainLayout;

export default EditPurchaseOrderPage;
