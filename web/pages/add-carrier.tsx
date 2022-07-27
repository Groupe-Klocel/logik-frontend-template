import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { AddCarrier } from 'modules/Carriers/PagesContainer/AddCarrier';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const AddCarrierPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddCarrier />
        </>
    );
};

AddCarrierPage.layout = MainLayout;

export default AddCarrierPage;
