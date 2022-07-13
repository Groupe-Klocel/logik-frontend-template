import { useAuth } from 'context/AuthContext';
import {
    GetFeatureTypeByIdQuery,
    DeleteFeatureTypeMutation,
    DeleteFeatureTypeMutationVariables,
    useGetFeatureTypeByIdQuery,
    useDeleteFeatureTypeMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { featuresTypesRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { FeatureTypeDetails } from '../Elements/FeatureTypeDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleFeatureTypeTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleFeatureType: FC<SingleFeatureTypeTypeProps> = ({
    id,
    router
}: SingleFeatureTypeTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetFeatureTypeByIdQuery<GetFeatureTypeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...featuresTypesRoutes,
        {
            breadcrumbName: `${data?.parameter?.value}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteFeatureTypeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteFeatureTypeMutation,
                _variables: DeleteFeatureTypeMutationVariables,
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

    const deleteFeatureType = ({ id }: DeleteFeatureTypeMutationVariables) => {
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
                title={`${t('menu:feature-type')}: ${data?.parameter?.value}`}
                routes={breadsCrumb}
                onBack={() => router.push(`/features-types`)}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        {data?.parameter?.system != true ? (
                            <>
                                <LinkButton
                                    icon={<EditTwoTone />}
                                    path={pathParams('/feature-type/edit/[id]', id)}
                                />
                                <Button
                                    danger
                                    loading={deleteLoading}
                                    onClick={() => deleteFeatureType({ id: id })}
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
                    data.parameter !== null ? (
                        <FeatureTypeDetails details={data?.parameter} />
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

export { SingleFeatureType };
