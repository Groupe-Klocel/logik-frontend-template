import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Groups } from '../modules/Groups/PagesContainer/Groups';

type PageComponent = FC & { layout: typeof MainLayout };

const GroupsPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <Groups />
        </>
    );
};

GroupsPage.layout = MainLayout;

export default GroupsPage;
