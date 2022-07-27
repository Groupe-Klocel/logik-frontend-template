import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Groups } from '../modules/Groups/PagesContainer/Groups';

type PageComponent = FC & { layout: typeof MainLayout };

const GroupsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Groups />
        </>
    );
};

GroupsPage.layout = MainLayout;

export default GroupsPage;
