import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { FeedbackOverwrites } from '../modules/Feedbacks/PagesContainer/FeedbackOverwrites';

type PageComponent = FC & { layout: typeof MainLayout };

const FeedbackOverwritePage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <FeedbackOverwrites />
        </>
    );
};

FeedbackOverwritePage.layout = MainLayout;

export default FeedbackOverwritePage;
