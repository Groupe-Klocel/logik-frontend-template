import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddArticle } from '../modules/Articles/PagesContainer/AddArticle';

type PageComponent = FC & { layout: typeof MainLayout };

const AddArticlePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddArticle />
        </>
    );
};

AddArticlePage.layout = MainLayout;

export default AddArticlePage;
