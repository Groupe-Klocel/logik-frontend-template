import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Sets } from '../modules/Articles/PagesContainer/Sets';

type PageComponent = FC & { layout: typeof MainLayout };

const SetsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Sets />
        </>
    );
};

SetsPage.layout = MainLayout;

export default SetsPage;
