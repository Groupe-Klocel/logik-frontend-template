import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { FeaturesCodes } from '../modules/Articles/PagesContainer/FeaturesCodes';

type PageComponent = FC & { layout: typeof MainLayout };

const FeaturesCodesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <FeaturesCodes />
        </>
    );
};

FeaturesCodesPage.layout = MainLayout;

export default FeaturesCodesPage;
