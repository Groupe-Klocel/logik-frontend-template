import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Users } from '../modules/Users/PagesContainer/Users';

type PageComponent = FC & { layout: typeof MainLayout };

const UsersPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <Users />
        </>
    );
};

UsersPage.layout = MainLayout;

export default UsersPage;
