import { AppHead, Welcome } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { Patterns } from 'modules/Patterns/PagesContainer/Patterns';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const PatternsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Patterns />
        </>
    );
};

PatternsPage.layout = MainLayout;

export default PatternsPage;
