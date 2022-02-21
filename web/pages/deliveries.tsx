import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const DeliveriesPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Deliveries Page" />
        </>
    );
};

DeliveriesPage.layout = MainLayout;

export default DeliveriesPage;
