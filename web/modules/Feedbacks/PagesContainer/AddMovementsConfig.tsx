import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addMovementsConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddMovementsConfigForm } from 'modules/Feedbacks/Elements/AddMovementsConfigForm';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddMovementsConfig = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add-movements-config-feedback')}
                routes={addMovementsConfigRoutes}
            />
            <StyledPageContent>
                <AddMovementsConfigForm />
            </StyledPageContent>
        </>
    );
};
