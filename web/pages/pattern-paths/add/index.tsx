import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPatternPath } from 'modules/PatternPaths/PagesContainer/AddPatternPath';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPatternPathPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddPatternPath />
        </>
    );
};

AddPatternPathPage.layout = MainLayout;

export default AddPatternPathPage;
