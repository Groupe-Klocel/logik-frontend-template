import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { Carriers } from 'modules/Carriers/PagesContainer/Carriers';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const CarriersPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Carriers />
        </>
    );
};
CarriersPage.layout = MainLayout;

export default CarriersPage;
