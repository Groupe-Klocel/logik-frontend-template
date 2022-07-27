import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { Blocks } from 'modules/Cartography/PagesContainer/Blocks';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const BlocksPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Blocks />
        </>
    );
};

BlocksPage.layout = MainLayout;

export default BlocksPage;
