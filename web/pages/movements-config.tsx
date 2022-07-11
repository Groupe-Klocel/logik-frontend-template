import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { MovementsConfig } from '../modules/Feedbacks/PagesContainer/MovementsConfig';

type PageComponent = FC & { layout: typeof MainLayout };

const MovementsConfigPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <MovementsConfig />
        </>
    );
};

MovementsConfigPage.layout = MainLayout;

export default MovementsConfigPage;
