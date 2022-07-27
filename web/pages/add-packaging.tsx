import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddPackaging } from '../modules/Packagings/PagesContainer/AddPackaging';

type PageComponent = FC & { layout: typeof MainLayout };

const AddPackagingPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddPackaging />
        </>
    );
};

AddPackagingPage.layout = MainLayout;

export default AddPackagingPage;
