import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { GroupOfUsers } from '../modules/Groups/PagesContainer/GroupOfUsers';

type PageComponent = FC & { layout: typeof MainLayout };

const GroupOfUsersPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <GroupOfUsers />
        </>
    );
};

GroupOfUsersPage.layout = MainLayout;

export default GroupOfUsersPage;
