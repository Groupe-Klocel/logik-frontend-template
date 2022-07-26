import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddArticleSet } from '../modules/Articles/PagesContainer/AddSet';

type PageComponent = FC & { layout: typeof MainLayout };

const AddSetPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddArticleSet />
        </>
    );
};

AddSetPage.layout = MainLayout;

export default AddSetPage;
