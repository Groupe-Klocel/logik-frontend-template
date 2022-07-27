import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddEquipment } from '../modules/Equipment/PagesContainer/AddEquipment';

type PageComponent = FC & { layout: typeof MainLayout };

const AddEquipmentPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddEquipment />
        </>
    );
};

AddEquipmentPage.layout = MainLayout;

export default AddEquipmentPage;
