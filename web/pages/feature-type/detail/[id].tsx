import { AppHead } from '@components';
import { SingleFeatureTypeDetail } from 'modules/Articles/PagesContainer/SingleFeatureTypeDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const FeatureTypeDetailPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleFeatureTypeDetail router={router} id={id!} />
        </>
    );
};

FeatureTypeDetailPage.layout = MainLayout;

export default FeatureTypeDetailPage;
