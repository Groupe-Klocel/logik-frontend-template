import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { StockOwners } from 'modules/StockOwners/PagesContainer/StockOwners';

import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const StockOwnersPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <StockOwners />
        </>
    );
};

StockOwnersPage.layout = MainLayout;

export default StockOwnersPage;
