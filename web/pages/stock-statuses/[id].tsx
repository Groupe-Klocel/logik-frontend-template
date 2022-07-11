import { AppHead } from '@components';
import { SingleStockStatus } from 'modules/Stocks/PagesContainer/SingleStockStatus';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const StockStatusPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title="Bee V2" />
            <SingleStockStatus router={router} id={id!} />
        </>
    );
};

StockStatusPage.layout = MainLayout;

export default StockStatusPage;
