import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddFeatureTypeDetail } from '../modules/Articles/PagesContainer/AddFeatureTypeDetail';

type PageComponent = FC & { layout: typeof MainLayout };

const AddFeatureTypeDetailPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddFeatureTypeDetail />
        </>
    );
};

AddFeatureTypeDetailPage.layout = MainLayout;

export default AddFeatureTypeDetailPage;
