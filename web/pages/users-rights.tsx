import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { UsersRights } from '../modules/Users/PagesContainer/UsersRights';

type PageComponent = FC & { layout: typeof MainLayout };

const UsersRightsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <UsersRights />
        </>
    );
};

UsersRightsPage.layout = MainLayout;

export default UsersRightsPage;
