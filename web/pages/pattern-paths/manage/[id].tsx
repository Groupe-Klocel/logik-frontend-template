import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { ManagePatternPathLocation } from 'modules/PatternPaths/PagesContainer/ManagePatternPathLocation';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const MangePatternPathLocationPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <ManagePatternPathLocation router={router} id={id!} />
        </>
    );
};

MangePatternPathLocationPage.layout = MainLayout;

export default MangePatternPathLocationPage;
