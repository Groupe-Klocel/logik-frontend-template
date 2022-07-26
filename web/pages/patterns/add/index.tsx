import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPattern } from 'modules/Patterns/PagesContainer/AddPattern';
import { META_DEFAULTS } from '@helpers';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPatternPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddPattern />
        </>
    );
};

AddPatternPage.layout = MainLayout;

export default AddPatternPage;
