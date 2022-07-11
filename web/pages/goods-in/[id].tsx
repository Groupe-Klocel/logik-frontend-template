import { AppHead } from '@components';
import { SingleGoodsIn } from 'modules/GoodsIns/PagesContainer/SingleGoodsIn';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const GoodsInPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleGoodsIn router={router} id={id!} />
        </>
    );
};

GoodsInPage.layout = MainLayout;

export default GoodsInPage;
