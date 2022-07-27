import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddFeedbackOverwrite } from '../modules/Feedbacks/PagesContainer/AddFeedbackOverwrite';

type PageComponent = FC & { layout: typeof MainLayout };

const AddFeedbackOverwritePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddFeedbackOverwrite />
        </>
    );
};

AddFeedbackOverwritePage.layout = MainLayout;

export default AddFeedbackOverwritePage;
