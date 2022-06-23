import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { StatusFeedbackOverwrites } from '../modules/Feedbacks/PagesContainer/StatusFeedbackOverwrites';

type PageComponent = FC & { layout: typeof MainLayout };

const StatusFeedbackOverwritesPage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <StatusFeedbackOverwrites />
        </>
    );
};

StatusFeedbackOverwritesPage.layout = MainLayout;

export default StatusFeedbackOverwritesPage;
