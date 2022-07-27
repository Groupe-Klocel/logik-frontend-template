import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddBarcode } from '../modules/Barcodes/PagesContainer/AddBarcode';

type PageComponent = FC & { layout: typeof MainLayout };

const AddBarcodePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddBarcode />
        </>
    );
};

AddBarcodePage.layout = MainLayout;

export default AddBarcodePage;
