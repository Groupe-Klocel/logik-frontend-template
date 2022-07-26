import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Equipment } from '../modules/Equipment/PagesContainer/Equipment';

type PageComponent = FC & { layout: typeof MainLayout };

const EquipmentPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <Equipment />
        </>
    );
};

EquipmentPage.layout = MainLayout;

export default EquipmentPage;
