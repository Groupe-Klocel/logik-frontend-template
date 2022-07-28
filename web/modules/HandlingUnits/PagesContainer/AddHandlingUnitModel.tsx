import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addHandlingUnitSubRoutes } from 'modules/HandlingUnits/Static/handlingUnitsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddHandlingUnitModelForm } from 'modules/HandlingUnits/Forms/AddHandlingUnitModelForm';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddHandlingUnitModel = () => {
    const { t } = useTranslation('actions');
    const router = useRouter();

    return (
        <>
            <HeaderContent
                title={t('add-handling-unit-model')}
                routes={addHandlingUnitSubRoutes}
                onBack={() => router.push('/handling-unit-models')}
            />
            <StyledPageContent>
                <AddHandlingUnitModelForm />
            </StyledPageContent>
        </>
    );
};
