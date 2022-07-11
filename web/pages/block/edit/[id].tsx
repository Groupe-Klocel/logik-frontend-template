import { AppHead } from '@components';
import { EditBlock } from 'modules/Cartography/PagesContainer/EditBlock';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditBlockPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditBlock router={router} id={id!} />
        </>
    );
};

EditBlockPage.layout = MainLayout;

export default EditBlockPage;
