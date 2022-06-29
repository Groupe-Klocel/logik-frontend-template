import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddFeedbackOverwrite } from '../modules/Feedbacks/PagesContainer/AddFeedbackOverwrite';

type PageComponent = FC & { layout: typeof MainLayout };

const AddFeedbackOverwritePage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <AddFeedbackOverwrite />
        </>
    );
};

AddFeedbackOverwritePage.layout = MainLayout;

export default AddFeedbackOverwritePage;
