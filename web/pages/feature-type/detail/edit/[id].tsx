import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditFeatureTypeDetail } from 'modules/Articles/PagesContainer/EditFeatureTypeDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditFeatureTypeDetailPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditFeatureTypeDetail router={router} id={id!} />
        </>
    );
};

EditFeatureTypeDetailPage.layout = MainLayout;

export default EditFeatureTypeDetailPage;
