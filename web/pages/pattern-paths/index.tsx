import { AppHead, Welcome } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { PatternPaths } from 'modules/PatternPaths/PagesContainer/PatternPaths';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const PatternPathsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <PatternPaths />
        </>
    );
};

PatternPathsPage.layout = MainLayout;

export default PatternPathsPage;
