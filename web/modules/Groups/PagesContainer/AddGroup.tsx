import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addGroupRoutes } from 'modules/Groups/Static/groupsRoutes';
import { AddGroupForm } from 'modules/Groups/Elements/AddGroupForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddGroup = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:add-group')} routes={addGroupRoutes} />
            <StyledPageContent>
                <AddGroupForm />
            </StyledPageContent>
        </>
    );
};
