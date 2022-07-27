import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <EditLocation router={router} id={id!} />
        </>
    );
};

EditLocationPage.layout = MainLayout;

export default EditLocationPage;
