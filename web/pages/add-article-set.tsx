import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddArticleSet } from '../modules/Articles/PagesContainer/AddArticleSet';

type PageComponent = FC & { layout: typeof MainLayout };

const AddArticleSetPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddArticleSet />
        </>
    );
};

AddArticleSetPage.layout = MainLayout;

export default AddArticleSetPage;
