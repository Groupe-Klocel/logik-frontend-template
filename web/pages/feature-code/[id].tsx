import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleFeatureCode } from 'modules/Articles/PagesContainer/SingleFeatureCode';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const FeatureCodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleFeatureCode router={router} id={id!} />
        </>
    );
};

FeatureCodePage.layout = MainLayout;

export default FeatureCodePage;
