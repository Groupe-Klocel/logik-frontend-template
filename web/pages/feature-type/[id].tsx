import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <SingleFeatureType router={router} id={id!} />
        </>
    );
};

FeatureTypePage.layout = MainLayout;

export default FeatureTypePage;
