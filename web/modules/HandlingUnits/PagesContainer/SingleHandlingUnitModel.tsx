import { useAuth } from 'context/AuthContext';
import {
    GetHandlingUnitModelByIdQuery,
    SoftDeleteHandlingUnitModelMutation,
    SoftDeleteHandlingUnitModelMutationVariables,
    useGetHandlingUnitModelByIdQuery,
    useSoftDeleteHandlingUnitModelMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { handlingUnitsSubRoutes } from 'modules/HandlingUnits/Static/handlingUnitsRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { HandlingUnitModelDetails } from '../Elements/HandlingUnitModelDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleHandlingUnitModelTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleHandlingUnitModel: FC<SingleHandlingUnitModelTypeProps> = ({
    id,
    router
}: SingleHandlingUnitModelTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetHandlingUnitModelByIdQuery<
        GetHandlingUnitModelByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...handlingUnitsSubRoutes,
        {
            breadcrumbName: `${data?.handlingUnitModel?.name}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useSoftDeleteHandlingUnitModelMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteHandlingUnitModelMutation,
                _variables: SoftDeleteHandlingUnitModelMutationVariables,
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
    const softDeleteHandlingUnitModel = ({
        handlingUnitModelId
    }: SoftDeleteHandlingUnitModelMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ handlingUnitModelId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    return (
        <>
            <HeaderContent
                title={`${t('menu:handling-unit-model')}: ${data?.handlingUnitModel?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/handling-unit-models')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        {data?.handlingUnitModel?.status != 1005 ? (
                            <>
                                <LinkButton
                                    icon={<EditTwoTone />}
                                    path={pathParams('/handlingUnit/edit/[id]', id)}
                                />
                                <Button
                                    danger
                                    loading={deleteLoading}
                                    onClick={() =>
                                        softDeleteHandlingUnitModel({ handlingUnitModelId: id })
                                    }
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
                    data.handlingUnitModel !== null ? (
                        <HandlingUnitModelDetails details={data?.handlingUnitModel} />
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

export { SingleHandlingUnitModel };
