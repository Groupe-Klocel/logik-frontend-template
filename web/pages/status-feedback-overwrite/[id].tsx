import { AppHead } from '@components';
import { SingleStatusFeedbackOverwrite } from 'modules/Feedbacks/PagesContainer/SingleStatusFeedbackOverwrite';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const StatusFeedbackOverwritePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <SingleStatusFeedbackOverwrite router={router} id={id!} />
        </>
    );
};

StatusFeedbackOverwritePage.layout = MainLayout;

export default StatusFeedbackOverwritePage;
