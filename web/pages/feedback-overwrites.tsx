import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { FeedbackOverwrites } from '../modules/Feedbacks/PagesContainer/FeedbackOverwrites';

type PageComponent = FC & { layout: typeof MainLayout };

const FeedbackOverwritePage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <FeedbackOverwrites />
        </>
    );
};

FeedbackOverwritePage.layout = MainLayout;

export default FeedbackOverwritePage;
