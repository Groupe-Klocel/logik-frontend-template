import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddStatusFeedbackOverwrites } from '../modules/Feedbacks/PagesContainer/AddStatusFeedbackOverwrite';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStatusFeedbackOverwritesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddStatusFeedbackOverwrites />
        </>
    );
};

AddStatusFeedbackOverwritesPage.layout = MainLayout;

export default AddStatusFeedbackOverwritesPage;
