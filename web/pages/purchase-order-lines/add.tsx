import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPurchaseOrderLine } from 'modules/PurchaseOrderLine/PagesContainer/AddPurchaseOrderLine';


type PageComponent = FC & { layout: typeof MainLayout };

const AddPurchaseOrderLinePage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddPurchaseOrderLine />
        </>
    );
};

AddPurchaseOrderLinePage.layout = MainLayout;

export default AddPurchaseOrderLinePage;
