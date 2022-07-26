import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleEquipmentDetail } from 'modules/Equipment/PagesContainer/SingleEquipmentDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EquipmentDetailPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleEquipmentDetail router={router} id={id!} />
        </>
    );
};

EquipmentDetailPage.layout = MainLayout;

export default EquipmentDetailPage;
