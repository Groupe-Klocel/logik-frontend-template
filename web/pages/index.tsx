import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const HomePage: PageComponent = () => {
    return (
        <>
            <Welcome text="Welcome to the new Bee Interface!" />
        </>
    );
};

HomePage.layout = MainLayout;

export default HomePage;
