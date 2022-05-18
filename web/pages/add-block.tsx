import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { AddBlock } from 'modules/Cartography/PagesContainer/AddBlock';
import { FC } from 'react';

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
