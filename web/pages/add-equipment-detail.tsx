import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddEquipmentDetail } from '../modules/Equipment/PagesContainer/AddEquipmentDetail';

type PageComponent = FC & { layout: typeof MainLayout };

const AddEquipmentDetailPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddEquipmentDetail />
        </>
    );
};

AddEquipmentDetailPage.layout = MainLayout;

export default AddEquipmentDetailPage;
