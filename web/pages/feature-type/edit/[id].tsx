import { AppHead } from '@components';
import { EditFeatureType } from 'modules/Articles/PagesContainer/EditFeatureType';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditFeatureTypePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditFeatureType router={router} id={id!} />
        </>
    );
};

EditFeatureTypePage.layout = MainLayout;

export default EditFeatureTypePage;
