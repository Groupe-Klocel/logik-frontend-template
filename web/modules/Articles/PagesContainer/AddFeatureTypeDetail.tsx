import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addFeatureTypeDetailRoutes } from 'modules/Articles/Static/articlesRoutes';
import { AddFeatureTypeDetailForm } from '../Forms/AddFeatureTypeDetailForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddFeatureTypeDetail = () => {
    const { t } = useTranslation('actions');
    const router = useRouter();
    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:feature-type-detail') })}
                routes={addFeatureTypeDetailRoutes}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                <AddFeatureTypeDetailForm />
            </StyledPageContent>
        </>
    );
};
