import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addPackagingRoutes } from 'modules/Packagings/Static/packagingsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddPackagingForm } from 'modules/Packagings/Elements/AddPackagingForm';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddPackaging = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add-packaging')} routes={addPackagingRoutes} />
            <StyledPageContent>
                <AddPackagingForm />
            </StyledPageContent>
        </>
    );
};
