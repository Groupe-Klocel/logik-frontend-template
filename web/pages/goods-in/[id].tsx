import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <SingleGoodsIn router={router} id={id!} />
        </>
    );
};

GoodsInPage.layout = MainLayout;

export default GoodsInPage;
