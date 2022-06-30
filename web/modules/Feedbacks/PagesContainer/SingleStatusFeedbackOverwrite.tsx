import { useAuth } from 'context/AuthContext';
import {
    DeleteStatusFeedbackOverwriteMutation,
    DeleteStatusFeedbackOverwriteMutationVariables,
    GetStatusFeedbackOverwriteByIdQuery,
    useDeleteStatusFeedbackOverwriteMutation,
    useGetStatusFeedbackOverwriteByIdQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Layout, Modal, Space, Typography } from 'antd';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';
import { StatusFeedbackOverwriteDetails } from '../Elements/StatusFeedbackOverwriteDetails';
import { statusFeedbackOverwritesRoutes } from '../Static/feedbacksRoutes';

export type SingleStatusFeedbackOverwriteTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleStatusFeedbackOverwrite: FC<SingleStatusFeedbackOverwriteTypeProps> = ({
    id,
    router
}: SingleStatusFeedbackOverwriteTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetStatusFeedbackOverwriteByIdQuery<
        GetStatusFeedbackOverwriteByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...statusFeedbackOverwritesRoutes,
        {
            breadcrumbName: `${data?.statusFeedbackOverwrite?.objectTypeText}/${data?.statusFeedbackOverwrite?.statusText}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteStatusFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteStatusFeedbackOverwriteMutation,
                _variables: DeleteStatusFeedbackOverwriteMutationVariables,
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

    const deleteStatusFeedbackOverwrite = ({
        id
    }: DeleteStatusFeedbackOverwriteMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    //modal to handle delete confirmation

    return (
        <>
            <HeaderContent
                title={`${t('menu:status-feedback-overwrite')} ${
                    data?.statusFeedbackOverwrite?.objectTypeText
                }/${data?.statusFeedbackOverwrite?.statusText}`}
                routes={breadsCrumb}
                onBack={() => router.push('/status-feedback-overwrites')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/status-feedback-overwrite/edit/[id]', id)}
                        ></LinkButton>
                        {data?.statusFeedbackOverwrite?.system != true ? (
                            <>
                                <Button
                                    danger
                                    loading={deleteLoading}
                                    onClick={() => deleteStatusFeedbackOverwrite({ id: id })}
                                >
                                    {t('actions:delete')}
                                </Button>
                            </>
                        ) : (
                            <></>
                        )}
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.statusFeedbackOverwrite !== null ? (
                        <StatusFeedbackOverwriteDetails details={data?.statusFeedbackOverwrite} />
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

export { SingleStatusFeedbackOverwrite };
