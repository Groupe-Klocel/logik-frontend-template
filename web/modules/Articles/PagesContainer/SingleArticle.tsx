import { ContentSpin } from '@components';
import { Layout, Space, Button } from 'antd';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ArticleDetails } from 'modules/Articles/Elements/ArticleDetails';
import useTranslation from 'next-translate/useTranslation';
import {
    GetArticleByIdQuery,
    useGetArticleByIdQuery,
    useDeleteArticleMutation,
    DeleteArticleMutation,
    DeleteArticleMutationVariables
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleArticleProps {
    id: string | any;
    router: NextRouter;
}

const SingleArticle: FC<ISingleArticleProps> = ({ id, router }: ISingleArticleProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const [isCalculating, setIsCalculating] = useState(false);

    const { isLoading, data, error } = useGetArticleByIdQuery<GetArticleByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: parseInt(id)
        }
    );

    const breadsCrumb = [
        ...articlesSubRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteArticleMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleMutation,
                _variables: DeleteArticleMutationVariables,
                _context: any
            ) => {
                router.back();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteArticle = ({ id }: DeleteArticleMutationVariables) => {
        mutate({ id });
    };

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    const updateBoxQuantity = async () => {
        setIsCalculating(true);
        const res = await fetch(`/api/article/update-quantity/${id}`);
        if (!res.ok) {
            const message = t('An error has occured: ') + res.status;
            showError(t('messages:error-update-data'));
            setIsCalculating(false);
        }
        const qntData = await res.json();

        if (data?.article) {
            data.article.boxQuantity = qntData.quantity;
            // router.reload();
            showSuccess(t('messages:success-update-data'));
            // forceUpdate();
        }
        setIsCalculating(false);
    };

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
                        <Button onClick={() => router.push(`/article/edit/${id}`)} type="primary">
                            {t('actions:edit')}
                        </Button>
                        <Button
                            loading={deleteLoading}
                            onClick={() => deleteArticle({ id: parseInt(id) })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data && !isLoading && !isCalculating ? (
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
