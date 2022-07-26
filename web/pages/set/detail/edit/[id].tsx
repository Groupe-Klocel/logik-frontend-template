import { AppHead } from '@components';
import { EditArticleSetDetail } from 'modules/Articles/PagesContainer/EditSetDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditSetDetailPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title="Bee V2" />
            <EditArticleSetDetail router={router} id={id!} />
        </>
    );
};

EditSetDetailPage.layout = MainLayout;

export default EditSetDetailPage;
