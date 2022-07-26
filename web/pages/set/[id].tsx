import { AppHead } from '@components';
import { SingleArticleSet } from 'modules/Articles/PagesContainer/SingleSet';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const SetPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleArticleSet router={router} id={id!} />
        </>
    );
};

SetPage.layout = MainLayout;

export default SetPage;
