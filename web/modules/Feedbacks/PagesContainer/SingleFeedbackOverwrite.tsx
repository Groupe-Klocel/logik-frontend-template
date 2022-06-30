import { useAuth } from 'context/AuthContext';
import {
    DeleteFeedbackOverwriteMutation,
    DeleteFeedbackOverwriteMutationVariables,
    GetFeedbackOverwriteByIdQuery,
    useDeleteFeedbackOverwriteMutation,
    useGetFeedbackOverwriteByIdQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { feedbackOverwritesRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { FeedbackOverwriteDetails } from '../Elements/FeedbackOverwriteDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleFeedbackOverwriteTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleFeedbackOverwrite: FC<SingleFeedbackOverwriteTypeProps> = ({
    id,
    router
}: SingleFeedbackOverwriteTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetFeedbackOverwriteByIdQuery<
        GetFeedbackOverwriteByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...feedbackOverwritesRoutes,
        {
            breadcrumbName: `${data?.feedbackOverwrite?.stockOwner.name}/${data?.feedbackOverwrite?.movementCodeText}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteFeedbackOverwriteMutation,
                _variables: DeleteFeedbackOverwriteMutationVariables,
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

    const deleteFeedbackOverwrite = ({ id }: DeleteFeedbackOverwriteMutationVariables) => {
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
                title={`${t('menu:feedbackOverwrite')}: ${
                    data?.feedbackOverwrite?.stockOwner.name
                }/${data?.feedbackOverwrite?.movementCodeText}`}
                routes={breadsCrumb}
                onBack={() => router.push('/feedbackOverwrites')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            title={t('actions:list', { name: t('menu:feedbackOverwrites') })}
                            path={'/feedback-overwrites'}
                        />
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/feedback-overwrite/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteFeedbackOverwrite({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.feedbackOverwrite !== null ? (
                        <FeedbackOverwriteDetails details={data?.feedbackOverwrite} />
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

export { SingleFeedbackOverwrite };
