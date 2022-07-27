import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <EditEquipment router={router} id={id!} />
        </>
    );
};

EditEquipmentPage.layout = MainLayout;

export default EditEquipmentPage;
