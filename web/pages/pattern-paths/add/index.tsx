import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPatternPath } from 'modules/PatternPaths/PagesContainer/AddPatternPath';
import { META_DEFAULTS } from '@helpers';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPatternPathPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddPatternPath />
        </>
    );
};

AddPatternPathPage.layout = MainLayout;

export default AddPatternPathPage;
