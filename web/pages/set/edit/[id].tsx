import { AppHead } from '@components';
import { EditArticleSet } from 'modules/Articles/PagesContainer/EditSet';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditSetPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditArticleSet router={router} id={id!} />
        </>
    );
};

EditSetPage.layout = MainLayout;

export default EditSetPage;
