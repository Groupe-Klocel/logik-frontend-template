import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddBlock } from '../modules/Cartography/PagesContainer/AddBlock';

type PageComponent = FC & { layout: typeof MainLayout };

const AddBlockPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddBlock />
        </>
    );
};

AddBlockPage.layout = MainLayout;

export default AddBlockPage;
