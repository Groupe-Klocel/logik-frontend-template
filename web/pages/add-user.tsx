import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddUser } from '../modules/Users/PagesContainer/AddUser';

type PageComponent = FC & { layout: typeof MainLayout };

const AddUserPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddUser />
        </>
    );
};

AddUserPage.layout = MainLayout;

export default AddUserPage;
