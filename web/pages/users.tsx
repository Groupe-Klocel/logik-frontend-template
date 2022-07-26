import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Users } from '../modules/Users/PagesContainer/Users';

type PageComponent = FC & { layout: typeof MainLayout };

const UsersPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Users />
        </>
    );
};

UsersPage.layout = MainLayout;

export default UsersPage;
