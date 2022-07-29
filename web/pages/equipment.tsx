import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Equipment } from '../modules/Equipment/PagesContainer/Equipment';

type PageComponent = FC & { layout: typeof MainLayout };

const EquipmentPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Equipment />
        </>
    );
};

EquipmentPage.layout = MainLayout;

export default EquipmentPage;
