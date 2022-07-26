import { AppHead } from '@components';
import { SingleFeatureType } from 'modules/Articles/PagesContainer/SingleFeatureType';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const FeatureTypePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleFeatureType router={router} id={id!} />
        </>
    );
};

FeatureTypePage.layout = MainLayout;

export default FeatureTypePage;
