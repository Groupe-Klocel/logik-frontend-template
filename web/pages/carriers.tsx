import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { Carriers } from 'modules/Carriers/PagesContainer/Carriers';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const CarriersPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <Carriers />
        </>
    );
};
CarriersPage.layout = MainLayout;

export default CarriersPage;
