import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const AboutPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on About Page" />
        </>
    );
};

AboutPage.layout = MainLayout;

export default AboutPage;
