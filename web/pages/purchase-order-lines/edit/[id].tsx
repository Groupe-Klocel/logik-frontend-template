import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditPurchaseOrderLine } from 'modules/PurchaseOrderLine/PagesContainer/EditPurchaseOrderLine';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditPurchaseOrderLinePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditPurchaseOrderLine router={router} id={id!} />
        </>
    );
};

EditPurchaseOrderLinePage.layout = MainLayout;

export default EditPurchaseOrderLinePage;
