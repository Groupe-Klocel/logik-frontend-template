import { AppHead } from '@components';
import { SingleEquipment } from 'modules/Equipment/PagesContainer/SingleEquipment';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EquipmentPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleEquipment router={router} id={id!} />
        </>
    );
};

EquipmentPage.layout = MainLayout;

export default EquipmentPage;
