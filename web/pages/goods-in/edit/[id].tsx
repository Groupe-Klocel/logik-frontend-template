import { AppHead } from '@components';
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
            <AppHead title="Bee V2" />
            <EditGoodsIn router={router} id={id!} />
        </>
    );
};

EditGoodsInLinePage.layout = MainLayout;

export default EditGoodsInLinePage;
