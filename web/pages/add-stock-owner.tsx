import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { AddStockOwner } from 'modules/StockOwners/PagesContainer/AddStockOwner';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStockOwnerPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddStockOwner />
        </>
    );
};

AddStockOwnerPage.layout = MainLayout;

export default AddStockOwnerPage;
