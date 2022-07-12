import { AppHead } from '@components';
import { EditLocation } from 'modules/Cartography/PagesContainer/EditLocation';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditLocationPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditLocation router={router} id={id!} />
        </>
    );
};

EditLocationPage.layout = MainLayout;

export default EditLocationPage;
