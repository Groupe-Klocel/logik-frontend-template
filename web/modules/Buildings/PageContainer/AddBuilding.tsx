import { Layout } from 'antd';
import { HeaderContent } from '@components';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { AddBuildingsForm } from '../Forms/AddBuildingForm';
import { addBuildingRoutes } from '../Static/routes';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddBuilding = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add-building')} routes={addBuildingRoutes} />
            <StyledPageContent>
                <AddBuildingsForm />
            </StyledPageContent>
        </>
    );
};
