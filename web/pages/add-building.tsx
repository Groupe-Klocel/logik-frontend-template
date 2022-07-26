import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { AddBuilding } from 'modules/Buildings/PageContainer/AddBuilding';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStatusFeedbackOverwritesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddBuilding />
        </>
    );
};

AddStatusFeedbackOverwritesPage.layout = MainLayout;

export default AddStatusFeedbackOverwritesPage;
