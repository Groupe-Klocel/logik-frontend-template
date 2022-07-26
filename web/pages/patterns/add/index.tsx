import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPattern } from 'modules/Patterns/PagesContainer/AddPattern';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPatternPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddPattern />
        </>
    );
};

AddPatternPage.layout = MainLayout;

export default AddPatternPage;
