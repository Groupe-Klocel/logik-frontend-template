import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { setsRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetArticleSetByIdQuery, useGetArticleSetByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditArticleSetForm } from '../Forms/EditSetForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditArticleSetProps {
    id: string | any;
    router: NextRouter;
}

const EditArticleSet: FC<IEditArticleSetProps> = ({ id, router }: IEditArticleSetProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetArticleSetByIdQuery<GetArticleSetByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...setsRoutes,
        {
            breadcrumbName: `${data?.articleSet?.name}`
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
                title={`${t('menu:article-set')}: ${data?.articleSet?.name}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditArticleSetForm articleSetId={id} details={data?.articleSet} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditArticleSet.displayName = 'EditArticleSet';

export { EditArticleSet };
