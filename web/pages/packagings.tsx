import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { Packagings } from 'modules/Packagings/PagesContainer/Packagings';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const PackagingsPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <Packagings />
        </>
    );
};

PackagingsPage.layout = MainLayout;

export default PackagingsPage;
