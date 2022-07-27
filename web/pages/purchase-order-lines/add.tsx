import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPurchaseOrderLine } from 'modules/PurchaseOrderLine/PagesContainer/AddPurchaseOrderLine';
import { META_DEFAULTS } from '@helpers';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPurchaseOrderLinePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddPurchaseOrderLine />
        </>
    );
};

AddPurchaseOrderLinePage.layout = MainLayout;

export default AddPurchaseOrderLinePage;
