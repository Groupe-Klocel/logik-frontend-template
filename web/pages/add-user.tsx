import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddUser } from '../modules/Users/PagesContainer/AddUser';

type PageComponent = FC & { layout: typeof MainLayout };

const AddUserPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddUser />
        </>
    );
};

AddUserPage.layout = MainLayout;

export default AddUserPage;
