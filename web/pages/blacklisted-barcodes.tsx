import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { BlacklistedBarcodes } from '../modules/Barcodes/PagesContainer/BlacklistedBarcodes';

type PageComponent = FC & { layout: typeof MainLayout };

const BlacklistedBarcodesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <BlacklistedBarcodes />
        </>
    );
};

BlacklistedBarcodesPage.layout = MainLayout;

export default BlacklistedBarcodesPage;
