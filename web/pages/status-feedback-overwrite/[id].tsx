import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
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
            <AppHead title={META_DEFAULTS.title} />
            <SingleStatusFeedbackOverwrite router={router} id={id!} />
        </>
    );
};

StatusFeedbackOverwritePage.layout = MainLayout;

export default StatusFeedbackOverwritePage;
