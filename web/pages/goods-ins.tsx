import { AppHead, Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { GoodsIns } from 'modules/GoodsIns/PagesContainer/GoodsIns';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const GoodsInsPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <GoodsIns />
        </>
    );
};

GoodsInsPage.layout = MainLayout;

export default GoodsInsPage;
