import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddStockStatus } from 'modules/Stocks/PagesContainer/AddStockStatus';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStockStatusPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddStockStatus />
        </>
    );
};

AddStockStatusPage.layout = MainLayout;

export default AddStockStatusPage;
