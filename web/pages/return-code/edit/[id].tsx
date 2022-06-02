import { AppHead } from '@components';
import { EditReturnCode } from 'modules/ReturnCodes/PagesContainer/EditReturnCode';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditReturnCodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditReturnCode router={router} id={id!} />
        </>
    );
};

EditReturnCodePage.layout = MainLayout;

export default EditReturnCodePage;
