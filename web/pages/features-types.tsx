import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { FeaturesTypes } from '../modules/Articles/PagesContainer/FeaturesTypes';

type PageComponent = FC & { layout: typeof MainLayout };

const FeaturesTypesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <FeaturesTypes />
        </>
    );
};

FeaturesTypesPage.layout = MainLayout;

export default FeaturesTypesPage;
