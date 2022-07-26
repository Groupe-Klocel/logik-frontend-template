import { AppHead } from '@components';
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
            <AppHead title="Bee V2" />
            <EditEquipmentDetail router={router} id={id!} />
        </>
    );
};

EditEquipmentDetailPage.layout = MainLayout;

export default EditEquipmentDetailPage;
