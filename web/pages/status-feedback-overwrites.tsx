import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { StatusFeedbackOverwrites } from '../modules/Feedbacks/PagesContainer/StatusFeedbackOverwrites';

type PageComponent = FC & { layout: typeof MainLayout };

const StatusFeedbackOverwritesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <StatusFeedbackOverwrites />
        </>
    );
};

StatusFeedbackOverwritesPage.layout = MainLayout;

export default StatusFeedbackOverwritesPage;
