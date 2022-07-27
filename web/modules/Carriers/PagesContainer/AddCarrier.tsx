import { HeaderContent } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { AddCarrierForm } from '../Forms/AddCarrierForm';
import { addCarrierRoutes } from '../Static/carriersRoutes';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddCarrier = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Carrier' })} routes={addCarrierRoutes} />
            <StyledPageContent>
                <AddCarrierForm />
            </StyledPageContent>
        </>
    );
};
