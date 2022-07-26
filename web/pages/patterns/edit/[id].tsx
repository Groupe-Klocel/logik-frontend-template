import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <EditPattern router={router} id={id!} />
        </>
    );
};

EditPatternPage.layout = MainLayout;

export default EditPatternPage;
