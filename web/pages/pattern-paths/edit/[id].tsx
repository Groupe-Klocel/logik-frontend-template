import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditPatternPath } from 'modules/PatternPaths/PagesContainer/EditPatternPath';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditPatternPathPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditPatternPath router={router} id={id!} />
        </>
    );
};

EditPatternPathPage.layout = MainLayout;

export default EditPatternPathPage;
