import { AppHead } from '@components';
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
            <AppHead title="Bee V2" />
            <ManagePatternPathLocation router={router} id={id!} />
        </>
    );
};

MangePatternPathLocationPage.layout = MainLayout;

export default MangePatternPathLocationPage;
