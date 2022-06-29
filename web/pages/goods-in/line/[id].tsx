import { AppHead } from '@components';
import { SingleGoodsInLine } from 'modules/GoodsIns/PagesContainer/SingleGoodsInLine';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const GoodsInLinePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleGoodsInLine router={router} id={id!} />
        </>
    );
};

GoodsInLinePage.layout = MainLayout;

export default GoodsInLinePage;
