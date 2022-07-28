import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddHandlingUnitModel } from '../modules/HandlingUnits/PagesContainer/AddHandlingUnitModel';

type PageComponent = FC & { layout: typeof MainLayout };

const AddHandlingUnitModelPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddHandlingUnitModel />
        </>
    );
};

AddHandlingUnitModelPage.layout = MainLayout;

export default AddHandlingUnitModelPage;
