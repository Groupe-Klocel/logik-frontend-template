import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { FeaturesTypes } from '../modules/Articles/PagesContainer/FeaturesTypes';

type PageComponent = FC & { layout: typeof MainLayout };

const FeaturesTypesPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <FeaturesTypes />
        </>
    );
};

FeaturesTypesPage.layout = MainLayout;

export default FeaturesTypesPage;
