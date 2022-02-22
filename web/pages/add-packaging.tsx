import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPackaging } from '../modules/Packagings/PagesContainer/AddPackaging';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPackagingPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddPackaging />
        </>
    );
};

AddPackagingPage.layout = MainLayout;

export default AddPackagingPage;
