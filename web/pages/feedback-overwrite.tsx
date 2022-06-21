import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { FeedbackOverwrite } from '../modules/Feedbacks/PagesContainer/FeedbackOverwrite';

type PageComponent = FC & { layout: typeof MainLayout };

const FeedbackOverwritePage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <FeedbackOverwrite />
        </>
    );
};

FeedbackOverwritePage.layout = MainLayout;

export default FeedbackOverwritePage;
