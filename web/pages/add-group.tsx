import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddGroup } from '../modules/Groups/PagesContainer/AddGroup';

type PageComponent = FC & { layout: typeof MainLayout };

const AddGroupPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddGroup />
        </>
    );
};

AddGroupPage.layout = MainLayout;

export default AddGroupPage;
