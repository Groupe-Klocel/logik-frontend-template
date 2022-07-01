import { AppHead } from '@components';
import { EditFeedbackOverwrite } from 'modules/Feedbacks/PagesContainer/EditFeedbackOverwrite';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const EditFeedbackOverwritePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title="Bee V2" />
            <EditFeedbackOverwrite router={router} id={id!} />
        </>
    );
};

EditFeedbackOverwritePage.layout = MainLayout;

export default EditFeedbackOverwritePage;
