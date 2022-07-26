import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddArticleSet } from '../modules/Articles/PagesContainer/AddSet';

type PageComponent = FC & { layout: typeof MainLayout };

const AddSetPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddArticleSet />
        </>
    );
};

AddSetPage.layout = MainLayout;

export default AddSetPage;
