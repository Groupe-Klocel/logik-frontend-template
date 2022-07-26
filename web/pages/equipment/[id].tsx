import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <SingleEquipment router={router} id={id!} />
        </>
    );
};

EquipmentPage.layout = MainLayout;

export default EquipmentPage;
