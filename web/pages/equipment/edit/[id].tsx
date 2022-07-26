import { AppHead } from '@components';
import { EditEquipment } from 'modules/Equipment/PagesContainer/EditEquipment';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditEquipmentPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditEquipment router={router} id={id!} />
        </>
    );
};

EditEquipmentPage.layout = MainLayout;

export default EditEquipmentPage;
