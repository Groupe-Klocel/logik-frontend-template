import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addFeedbackOverwriteRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddFeedbackOverwriteForm } from 'modules/Feedbacks/Forms/AddFeedbackOverwriteForm';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddFeedbackOverwrite = () => {
    const router = useRouter();
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add-feedbackOverwrite')}
                routes={addFeedbackOverwriteRoutes}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                <AddFeedbackOverwriteForm />
            </StyledPageContent>
        </>
    );
};
