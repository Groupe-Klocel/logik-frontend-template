import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <SingleArticleSetDetail router={router} id={id!} />
        </>
    );
};

SetDetailPage.layout = MainLayout;

export default SetDetailPage;
