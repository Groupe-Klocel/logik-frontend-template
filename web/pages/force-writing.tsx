import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const ForceWritingPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Force Writing Page" />
        </>
    );
};

ForceWritingPage.layout = MainLayout;

export default ForceWritingPage;
