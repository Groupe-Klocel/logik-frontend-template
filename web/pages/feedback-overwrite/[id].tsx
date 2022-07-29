import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleFeedbackOverwrite } from 'modules/Feedbacks/PagesContainer/SingleFeedbackOverwrite';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const FeedbackOverwritePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleFeedbackOverwrite router={router} id={id!} />
        </>
    );
};

FeedbackOverwritePage.layout = MainLayout;

export default FeedbackOverwritePage;
