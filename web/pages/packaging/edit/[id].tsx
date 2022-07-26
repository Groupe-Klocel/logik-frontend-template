import { AppHead } from '@components';
import { EditPackaging } from 'modules/Packagings/PagesContainer/EditPackaging';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditPackagingPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditPackaging router={router} id={id!} />
        </>
    );
};

EditPackagingPage.layout = MainLayout;

export default EditPackagingPage;
