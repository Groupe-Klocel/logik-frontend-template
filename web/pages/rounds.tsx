import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const RoundsPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Rounds Page" />
        </>
    );
};

RoundsPage.layout = MainLayout;

export default RoundsPage;
