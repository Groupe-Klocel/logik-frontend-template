import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditFeatureCode } from 'modules/Articles/PagesContainer/EditFeatureCode';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditFeatureCodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditFeatureCode router={router} id={id!} />
        </>
    );
};

EditFeatureCodePage.layout = MainLayout;

export default EditFeatureCodePage;
