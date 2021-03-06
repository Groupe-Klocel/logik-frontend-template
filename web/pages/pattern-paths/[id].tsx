import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SinglePatternPath } from 'modules/PatternPaths/PagesContainer/SinglePatternPath';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const PatternPathPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SinglePatternPath router={router} id={id!} />
        </>
    );
};

PatternPathPage.layout = MainLayout;

export default PatternPathPage;
