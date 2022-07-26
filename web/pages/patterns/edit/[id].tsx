import { AppHead } from '@components';
import { EditPattern } from 'modules/Patterns/PagesContainer/EditPattern';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditPatternPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditPattern router={router} id={id!} />
        </>
    );
};

EditPatternPage.layout = MainLayout;

export default EditPatternPage;
