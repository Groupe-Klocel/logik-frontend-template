import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { StockStatuses } from '../modules/Stocks/PagesContainer/StockStatuses';

type PageComponent = FC & { layout: typeof MainLayout };

const StockStatusesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <StockStatuses />
        </>
    );
};

StockStatusesPage.layout = MainLayout;

export default StockStatusesPage;
