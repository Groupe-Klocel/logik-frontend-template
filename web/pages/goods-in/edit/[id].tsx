import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditGoodsIn } from 'modules/GoodsIns/PagesContainer/EditGoodsIn';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditGoodsInLinePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditGoodsIn router={router} id={id!} />
        </>
    );
};

EditGoodsInLinePage.layout = MainLayout;

export default EditGoodsInLinePage;
