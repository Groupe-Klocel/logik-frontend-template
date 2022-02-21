import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const WarningPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Warning Page" />
        </>
    );
};

WarningPage.layout = MainLayout;

export default WarningPage;
