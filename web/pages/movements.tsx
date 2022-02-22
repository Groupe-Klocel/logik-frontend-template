import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const MovementsPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Movements Page" />
        </>
    );
};

MovementsPage.layout = MainLayout;

export default MovementsPage;
