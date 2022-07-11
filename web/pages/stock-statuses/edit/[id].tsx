import { AppHead } from '@components';
import { EditStockStatus } from 'modules/Stocks/PagesContainer/EditStockStatus';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditStockStatusPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditStockStatus router={router} id={id!} />
        </>
    );
};

EditStockStatusPage.layout = MainLayout;

export default EditStockStatusPage;
