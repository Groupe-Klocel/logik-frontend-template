import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { Buildings } from 'modules/Buildings/PageContainer/Buildings';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const FeedbackOverwritePage: PageComponent = () => {
    return (
        <>
            <AppHead title="Bee V2" />
            <Buildings />
        </>
    );
};

FeedbackOverwritePage.layout = MainLayout;

export default FeedbackOverwritePage;
