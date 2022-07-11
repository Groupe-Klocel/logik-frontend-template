import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Equipments } from '../modules/Unclassed/PagesContainer/Equipments';

type PageComponent = FC & { layout: typeof MainLayout };

const EquipmentsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Equipments />
        </>
    );
};

EquipmentsPage.layout = MainLayout;

export default EquipmentsPage;
