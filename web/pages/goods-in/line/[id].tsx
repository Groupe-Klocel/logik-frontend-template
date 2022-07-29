import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleGoodsInLine } from 'modules/GoodsInLine/PagesContainer/SingleGoodsInLine';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const GoodsInLinePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleGoodsInLine router={router} id={id!} />
        </>
    );
};

GoodsInLinePage.layout = MainLayout;

export default GoodsInLinePage;
