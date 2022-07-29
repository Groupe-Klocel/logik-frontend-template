import { useAuth } from 'context/AuthContext';
import {
    GetFeatureTypeDetailByIdQuery,
    DeleteFeatureTypeDetailMutation,
    DeleteFeatureTypeDetailMutationVariables,
    useGetFeatureTypeDetailByIdQuery,
    useDeleteFeatureTypeDetailMutation,
    useGetFeatureTypesParamsQuery,
    GetFeatureTypesParamsQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { featuresTypesRoutes } from 'modules/Articles/Static/articlesRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { FeatureTypeDetailDetails } from '../Elements/FeatureTypeDetailDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleFeatureTypeDetailTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleFeatureTypeDetail: FC<SingleFeatureTypeDetailTypeProps> = ({
    id,
    router
}: SingleFeatureTypeDetailTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();
    const [featureTypeId, setFeatureTypeId] = useState<any>();

    const { isLoading, data, error } = useGetFeatureTypeDetailByIdQuery<
        GetFeatureTypeDetailByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...featuresTypesRoutes,
        {
            breadcrumbName: `${data?.featureTypeDetail?.featureTypeText}_${data?.featureTypeDetail?.featureCode?.name}`
        }
    ];

    //To render feature type ID from parameter table for the given scope and code
    const featureTypesList = useGetFeatureTypesParamsQuery<
        Partial<GetFeatureTypesParamsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (featureTypesList) {
            setFeatureTypeId(
                featureTypesList?.data?.listParametersForAScope?.find(
                    (e: any) => e.code == data?.featureTypeDetail?.featureType
                )?.id
            );
        }
    }, [featureTypesList]);

    const { mutate, isLoading: deleteLoading } = useDeleteFeatureTypeDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteFeatureTypeDetailMutation,
                _variables: DeleteFeatureTypeDetailMutationVariables,
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

    const deleteFeatureTypeDetail = ({ id }: DeleteFeatureTypeDetailMutationVariables) => {
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
                title={`${t('menu:feature-type-detail')}`}
                routes={breadsCrumb}
                onBack={() => router.push(`/feature-type/${featureTypeId}`)}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/feature-type/detail/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteFeatureTypeDetail({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.featureTypeDetail !== null ? (
                        <FeatureTypeDetailDetails details={data?.featureTypeDetail} />
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

export { SingleFeatureTypeDetail };
