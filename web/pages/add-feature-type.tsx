import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddFeatureType } from '../modules/Articles/PagesContainer/AddFeatureType';

type PageComponent = FC & { layout: typeof MainLayout };

const AddFeatureTypePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddFeatureType />
        </>
    );
};

AddFeatureTypePage.layout = MainLayout;

export default AddFeatureTypePage;
