import { AppHead } from '@components';
import { SingleArticleSetDetail } from 'modules/Articles/PagesContainer/SingleSetDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const SetDetailPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleArticleSetDetail router={router} id={id!} />
        </>
    );
};

SetDetailPage.layout = MainLayout;

export default SetDetailPage;
