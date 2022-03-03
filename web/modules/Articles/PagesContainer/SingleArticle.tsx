import { ContentSpin } from '@components';
import { Layout, Space, Button } from 'antd';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ArticleDetails } from 'modules/Articles/Elements/ArticleDetails';
import useTranslation from 'next-translate/useTranslation';
import { GetArticleByIdQuery, useGetArticleByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleArticleProps {
    id: string | any;
    router: NextRouter;
}

const SingleArticle: FC<ISingleArticleProps> = ({ id, router }: ISingleArticleProps) => {
    let { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetArticleByIdQuery<GetArticleByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: parseInt(id)
        }
    );


    if (error) {
        showError(t('messages:error-getting-data'));
    }

    const breadsCrumb = [
        ...articlesSubRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const updateBoxQuantity = async () => {
        const res  = await fetch(`/api/article/update-quantity/${id}`);
        if (!res.ok) {
            const message = t('An error has occured: ') + res.status;
            console.log(message);
            // throw new Error(message);
        }
        const qntData = await res.json();
        console.log(qntData);
        if(data?.article)
            data.article.boxQuantity = qntData.quantity;        
    }

    return (
        <>
            <HeaderContent
                title={`${t('common:article')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        <Button onClick={updateBoxQuantity} type="primary">
                            {t('actions:update-quantity')}
                        </Button>
                        <Button onClick={() => alert('Edit')} type="primary">
                            {t('actions:edit')}
                        </Button>
                        <Button onClick={() => alert('Delete')}>{t('actions:delete')}</Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <ArticleDetails details={data?.article} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SingleArticle.displayName = 'SingleArticle';

export { SingleArticle };
