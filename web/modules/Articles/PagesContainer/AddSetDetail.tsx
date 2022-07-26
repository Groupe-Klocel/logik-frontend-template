import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addArticleSetDetailRoutes } from 'modules/Articles/Static/articlesRoutes';
import { AddArticleSetDetailForm } from '../Forms/AddSetDetailForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddArticleSetDetail = () => {
    const { t } = useTranslation('actions');
    const router = useRouter();
    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:article-set-detail') })}
                routes={addArticleSetDetailRoutes}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                <AddArticleSetDetailForm />
            </StyledPageContent>
        </>
    );
};
