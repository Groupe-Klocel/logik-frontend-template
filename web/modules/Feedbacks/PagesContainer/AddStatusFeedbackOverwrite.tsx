import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addStatusFeedbackOverwritesRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddStatusFeedbackOverwritesForm } from 'modules/Feedbacks/Forms/AddStatusFeedbackOverwritesForm';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddStatusFeedbackOverwrites = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add-status-feedback-overwrite')}
                routes={addStatusFeedbackOverwritesRoutes}
            />
            <StyledPageContent>
                <AddStatusFeedbackOverwritesForm />
            </StyledPageContent>
        </>
    );
};
