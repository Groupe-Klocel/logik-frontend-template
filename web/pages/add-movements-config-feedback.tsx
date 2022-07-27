import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddMovementsConfig } from '../modules/Feedbacks/PagesContainer/AddMovementsConfig';

type PageComponent = FC & { layout: typeof MainLayout };

const AddMovementsConfigPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddMovementsConfig />
        </>
    );
};

AddMovementsConfigPage.layout = MainLayout;

export default AddMovementsConfigPage;
