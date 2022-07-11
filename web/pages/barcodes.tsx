import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Barcodes } from '../modules/Barcodes/PagesContainer/Barcodes';

type PageComponent = FC & { layout: typeof MainLayout };

const BarcodesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Barcodes />
        </>
    );
};

BarcodesPage.layout = MainLayout;

export default BarcodesPage;
