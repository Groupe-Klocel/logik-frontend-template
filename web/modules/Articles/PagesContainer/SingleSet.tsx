import { useAuth } from 'context/AuthContext';
import {
    GetArticleSetByIdQuery,
    DeleteArticleSetMutation,
    DeleteArticleSetMutationVariables,
    useGetArticleSetByIdQuery,
    useDeleteArticleSetMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { setsRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { ArticleSetDetails } from '../Elements/SetDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleArticleSetTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleArticleSet: FC<SingleArticleSetTypeProps> = ({
    id,
    router
}: SingleArticleSetTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

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

    const { mutate, isLoading: deleteLoading } = useDeleteArticleSetMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleSetMutation,
                _variables: DeleteArticleSetMutationVariables,
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

    const deleteArticleSet = ({ id }: DeleteArticleSetMutationVariables) => {
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
                title={`${t('menu:article-set')}: ${data?.articleSet?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push(`/sets`)}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/set/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteArticleSet({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.articleSet !== null ? (
                        <ArticleSetDetails details={data?.articleSet} />
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

export { SingleArticleSet };
