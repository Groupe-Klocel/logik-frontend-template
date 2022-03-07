import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addStatusConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddStatusConfigForm } from 'modules/Feedbacks/Elements/AddStatusConfigForm';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;


export const AddStatusConfig = ()  => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add-status-config-feedback')} routes={addStatusConfigRoutes} />
            <StyledPageContent>
                <AddStatusConfigForm />
            </StyledPageContent>
        </>
    );
};
