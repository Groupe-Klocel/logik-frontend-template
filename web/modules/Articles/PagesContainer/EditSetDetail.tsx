import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { GetArticleSetDetailByIdQuery, useGetArticleSetDetailByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { setsRoutes } from '../Static/articlesRoutes';
import { EditArticleSetDetailForm } from '../Forms/EditSetDetailForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditArticleSetDetailProps {
    id: string | any;
    router: NextRouter;
}

const EditArticleSetDetail: FC<EditArticleSetDetailProps> = ({
    id,
    router
}: EditArticleSetDetailProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetArticleSetDetailByIdQuery<
        GetArticleSetDetailByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...setsRoutes,
        {
            breadcrumbName: `${data?.articleSetDetail?.articleSet.name}_${data?.articleSetDetail?.article.name}`
        }
    ];

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    return (
        <>
            <HeaderContent
                title={`${t('menu:article-set-detail')}: ${
                    data?.articleSetDetail?.articleSet.name
                }_${data?.articleSetDetail?.article.name}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                // actionsRight={
                //   <Space>
                //     <Button onClick={()=> alert()} type="primary">
                //         {t('actions:update')}
                //     </Button>
                //     <Button onClick={() => router.back()}>
                //         {t('actions:cancel')}
                //     </Button>
                //   </Space>
                // }
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditArticleSetDetailForm
                        articleSetDetailId={id}
                        details={data?.articleSetDetail}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditArticleSetDetail.displayName = 'EditArticleSetDetail';

export { EditArticleSetDetail };
