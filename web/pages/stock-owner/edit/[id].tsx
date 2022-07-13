import { AppHead } from '@components';
import { EditStockOwner } from 'modules/StockOwners/PagesContainer/EditStockOwner';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditStockOwnerPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditStockOwner router={router} id={id!} />
        </>
    );
};

EditStockOwnerPage.layout = MainLayout;

export default EditStockOwnerPage;
