import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddArticleSetDetail } from '../modules/Articles/PagesContainer/AddSetDetail';

type PageComponent = FC & { layout: typeof MainLayout };

const AddArticleSetPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddArticleSetDetail />
        </>
    );
};

AddArticleSetPage.layout = MainLayout;

export default AddArticleSetPage;
