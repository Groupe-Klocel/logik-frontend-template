import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddFeatureCode } from '../modules/Articles/PagesContainer/AddFeatureCode';

type PageComponent = FC & { layout: typeof MainLayout };

const AddFeatureCodePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddFeatureCode />
        </>
    );
};

AddFeatureCodePage.layout = MainLayout;

export default AddFeatureCodePage;
