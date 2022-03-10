import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const LoadsPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Loads Page" />
        </>
    );
};

LoadsPage.layout = MainLayout;

export default LoadsPage;
