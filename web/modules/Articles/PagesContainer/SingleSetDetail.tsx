import { useAuth } from 'context/AuthContext';
import {
    GetArticleSetDetailByIdQuery,
    DeleteArticleSetDetailMutation,
    DeleteArticleSetDetailMutationVariables,
    useGetArticleSetDetailByIdQuery,
    useDeleteArticleSetDetailMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { setsRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { ArticleSetDetailDetails } from '../Elements/SetDetailDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleArticleSetDetailTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleArticleSetDetail: FC<SingleArticleSetDetailTypeProps> = ({
    id,
    router
}: SingleArticleSetDetailTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

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

    const { mutate, isLoading: deleteLoading } = useDeleteArticleSetDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleSetDetailMutation,
                _variables: DeleteArticleSetDetailMutationVariables,
                _context: unknown
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

    const deleteArticleSetDetail = ({ id }: DeleteArticleSetDetailMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    return (
        <>
            <HeaderContent
                title={`${t('menu:article-set-detail')}`}
                routes={breadsCrumb}
                onBack={() => router.push(`/set/${data?.articleSetDetail?.articleSetId}`)}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/set/detail/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteArticleSetDetail({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.articleSetDetail !== null ? (
                        <ArticleSetDetailDetails details={data?.articleSetDetail} />
                    ) : (
                        <Typography>Content Does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </PageContentWrapper>
        </>
    );
};

export { SingleArticleSetDetail };
