import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <EditPackaging router={router} id={id!} />
        </>
    );
};

EditPackagingPage.layout = MainLayout;

export default EditPackagingPage;
