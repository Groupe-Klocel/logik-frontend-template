import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addPackagingRoutes } from 'modules/Packagings/Static/packagingsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddPackagingForm } from 'modules/Packagings/Forms/AddPackagingForm';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddPackaging = () => {
    const { t } = useTranslation('actions');
    const router = useRouter();

    return (
        <>
            <HeaderContent
                title={t('add-packaging')}
                routes={addPackagingRoutes}
                onBack={() => router.push('/packagings')}
            />
            <StyledPageContent>
                <AddPackagingForm />
            </StyledPageContent>
        </>
    );
};
