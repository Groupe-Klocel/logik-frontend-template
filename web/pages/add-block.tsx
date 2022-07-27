import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddBlock } from '../modules/Cartography/PagesContainer/AddBlock';

type PageComponent = FC & { layout: typeof MainLayout };

const AddBlockPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddBlock />
        </>
    );
};

AddBlockPage.layout = MainLayout;

export default AddBlockPage;
