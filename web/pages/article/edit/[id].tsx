import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditArticle } from 'modules/Articles/PagesContainer/EditArticle';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditArticlePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditArticle router={router} id={id!} />
        </>
    );
};

EditArticlePage.layout = MainLayout;

export default EditArticlePage;
