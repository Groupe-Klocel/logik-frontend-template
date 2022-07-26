import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { GroupsRights } from '../modules/Groups/PagesContainer/GroupsRights';

type PageComponent = FC & { layout: typeof MainLayout };

const GroupsRightsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <GroupsRights />
        </>
    );
};

GroupsRightsPage.layout = MainLayout;

export default GroupsRightsPage;
