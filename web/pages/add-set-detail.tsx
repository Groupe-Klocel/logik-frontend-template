import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddArticleSetDetail } from '../modules/Articles/PagesContainer/AddSetDetail';

type PageComponent = FC & { layout: typeof MainLayout };

const AddArticleSetPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddArticleSetDetail />
        </>
    );
};

AddArticleSetPage.layout = MainLayout;

export default AddArticleSetPage;
