import { useAuth } from 'context/AuthContext';
import {
    GetFeatureCodeByIdQuery,
    DeleteFeatureCodeMutation,
    DeleteFeatureCodeMutationVariables,
    useGetFeatureCodeByIdQuery,
    useDeleteFeatureCodeMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { featuresCodesRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { FeatureCodeDetails } from '../Elements/FeatureCodeDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleFeatureCodeTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleFeatureCode: FC<SingleFeatureCodeTypeProps> = ({
    id,
    router
}: SingleFeatureCodeTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetFeatureCodeByIdQuery<GetFeatureCodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...featuresCodesRoutes,
        {
            breadcrumbName: `${data?.featureCode?.name}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteFeatureCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteFeatureCodeMutation,
                _variables: DeleteFeatureCodeMutationVariables,
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

    const deleteFeatureCode = ({ id }: DeleteFeatureCodeMutationVariables) => {
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
                title={`${t('menu:feature-code')}: ${data?.featureCode?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push(`/features-codes`)}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/feature-code/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteFeatureCode({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.featureCode !== null ? (
                        <FeatureCodeDetails details={data?.featureCode} />
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

export { SingleFeatureCode };
