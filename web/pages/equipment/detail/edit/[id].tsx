import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditEquipmentDetail } from 'modules/Equipment/PagesContainer/EditEquipmentDetail';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditEquipmentDetailPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditEquipmentDetail router={router} id={id!} />
        </>
    );
};

EditEquipmentDetailPage.layout = MainLayout;

export default EditEquipmentDetailPage;
