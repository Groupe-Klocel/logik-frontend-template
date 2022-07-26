import { useAuth } from 'context/AuthContext';
import {
    GetEquipmentDetailByIdQuery,
    DeleteEquipmentDetailMutation,
    DeleteEquipmentDetailMutationVariables,
    useGetEquipmentDetailByIdQuery,
    useDeleteEquipmentDetailMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { equipmentRoutes } from 'modules/Equipment/Static/equipmentRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { EquipmentDetailDetails } from '../Elements/EquipmentDetailDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleEquipmentDetailTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleEquipmentDetail: FC<SingleEquipmentDetailTypeProps> = ({
    id,
    router
}: SingleEquipmentDetailTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetEquipmentDetailByIdQuery<
        GetEquipmentDetailByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...equipmentRoutes,
        {
            breadcrumbName: `${data?.equipmentDetail?.equipment?.name} Mode: ${data?.equipmentDetail?.preparationModeText}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteEquipmentDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteEquipmentDetailMutation,
                _variables: DeleteEquipmentDetailMutationVariables,
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

    const deleteEquipmentDetail = ({ id }: DeleteEquipmentDetailMutationVariables) => {
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
                title={`${t('menu:equipment-detail')}`}
                routes={breadsCrumb}
                onBack={() => router.push(`/equipment/${data?.equipmentDetail?.equipmentId}`)}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        {/* <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/equipmentDetail/edit/[id]', id)}
                            /> */}
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteEquipmentDetail({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.equipmentDetail !== null ? (
                        <EquipmentDetailDetails details={data?.equipmentDetail} />
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

export { SingleEquipmentDetail };
