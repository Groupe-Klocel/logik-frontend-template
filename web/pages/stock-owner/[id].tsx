import { AppHead } from '@components';
import { SingleStockOwner } from 'modules/StockOwners/PagesContainer/SingleStockOwner';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const StockOwnerPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleStockOwner router={router} id={id!} />
        </>
    );
};

StockOwnerPage.layout = MainLayout;

export default StockOwnerPage;
