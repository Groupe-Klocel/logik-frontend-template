import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { EditStatusFeedbackOverwrite } from 'modules/Feedbacks/PagesContainer/EditStatusFeedbackOverwrite';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditStatusFeedbackOverwritePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <EditStatusFeedbackOverwrite router={router} id={id!} />
        </>
    );
};

EditStatusFeedbackOverwritePage.layout = MainLayout;

export default EditStatusFeedbackOverwritePage;
