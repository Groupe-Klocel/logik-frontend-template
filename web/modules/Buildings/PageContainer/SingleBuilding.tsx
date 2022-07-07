import { useAuth } from 'context/AuthContext';
import {
    DeleteBuildingMutation,
    DeleteBuildingMutationVariables,
    GetBuildingByIdQuery,
    SoftDeleteBuildingMutation,
    SoftDeleteBuildingMutationVariables,
    useDeleteBuildingMutation,
    useGetBuildingByIdQuery,
    useSoftDeleteBuildingMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Layout, Modal, Space, Typography } from 'antd';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';
import { BuildingDetails } from '../Elements/BuildingDetails';
import { buildingsRoutes } from '../Static/routes';

export type SingleBuildingTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleBuilding: FC<SingleBuildingTypeProps> = ({ id, router }: SingleBuildingTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetBuildingByIdQuery<GetBuildingByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...buildingsRoutes,
        {
            breadcrumbName: `${data?.building?.name}`
        }
    ];

    //Using Soft Delete instead of Delete
    /*const { mutate, isLoading: deleteLoading } = useDeleteBuildingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBuildingMutation,
                _variables: DeleteBuildingMutationVariables,
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

    const deleteBuilding = ({ id }: DeleteBuildingMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };*/

    const { mutate, isLoading: softDeleteLoading } = useSoftDeleteBuildingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteBuildingMutation,
                _variables: SoftDeleteBuildingMutationVariables,
                _context: unknown
            ) => {
                router.back();
                if (!softDeleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const softDeleteBuilding = ({ buildingId }: SoftDeleteBuildingMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ buildingId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    return (
        <>
            <HeaderContent
                title={`${t('common:building')} ${data?.building?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/buildings')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        {data?.building?.status != 1005 ? (
                            <>
                                <LinkButton
                                    icon={<EditTwoTone />}
                                    path={pathParams('/building/edit/[id]', id)}
                                ></LinkButton>
                                <Button
                                    danger
                                    onClick={() => softDeleteBuilding({ buildingId: id })}
                                >
                                    {t('actions:delete')}
                                </Button>
                            </>
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.building !== null ? (
                        <BuildingDetails details={data?.building} />
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

export { SingleBuilding };
