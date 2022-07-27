import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddStockStatus } from '../modules/Stocks/PagesContainer/AddStockStatus';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStockStatusPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddStockStatus />
        </>
    );
};

AddStockStatusPage.layout = MainLayout;

export default AddStockStatusPage;
