import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddStatusFeedbackOverwrites } from '../modules/Feedbacks/PagesContainer/AddStatusFeedbackOverwrites';

type PageComponent = FC & { layout: typeof MainLayout };

const AddStatusFeedbackOverwritesPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddStatusFeedbackOverwrites />
        </>
    );
};

AddStatusFeedbackOverwritesPage.layout = MainLayout;

export default AddStatusFeedbackOverwritesPage;
