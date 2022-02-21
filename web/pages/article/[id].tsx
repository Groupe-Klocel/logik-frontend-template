import { AppHead } from '@components';
import { SingleArticle } from 'modules/Articles/PagesContainer/SingleArticle';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title="Bee V2" />
            <SingleArticle router={router} id={id!} />
        </>
    );
};

ArticlePage.layout = MainLayout;

export default ArticlePage;
