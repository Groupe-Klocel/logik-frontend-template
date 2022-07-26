import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddLocation } from '../modules/Cartography/PagesContainer/AddLocation';

type PageComponent = FC & { layout: typeof MainLayout };

const AddLocationPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddLocation />
        </>
    );
};

AddLocationPage.layout = MainLayout;

export default AddLocationPage;
