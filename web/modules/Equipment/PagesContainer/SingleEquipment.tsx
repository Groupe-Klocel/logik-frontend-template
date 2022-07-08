import { useAuth } from 'context/AuthContext';
import {
    GetEquipmentByIdQuery,
    SoftDeleteEquipmentMutation,
    SoftDeleteEquipmentMutationVariables,
    useGetEquipmentByIdQuery,
    useSoftDeleteEquipmentMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { equipmentRoutes } from 'modules/Equipment/Static/equipmentRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { EquipmentDetails } from '../Elements/EquipmentDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleEquipmentTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleEquipment: FC<SingleEquipmentTypeProps> = ({
    id,
    router
}: SingleEquipmentTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetEquipmentByIdQuery<GetEquipmentByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...equipmentRoutes,
        {
            breadcrumbName: `${data?.equipment?.name}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useSoftDeleteEquipmentMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteEquipmentMutation,
                _variables: SoftDeleteEquipmentMutationVariables,
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

    const softDeleteEquipment = ({ equipmentId }: SoftDeleteEquipmentMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ equipmentId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    return (
        <>
            <HeaderContent
                title={`${t('menu:equipment-piece')}: ${data?.equipment?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/equipment')}
                actionsRight={
                    data?.equipment?.priority === null ? (
                        <></>
                    ) : (
                        <Space>
                            {/* ADD HERE*/}
                            <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/equipment/edit/[id]', id)}
                            />
                            <Button
                                danger
                                loading={deleteLoading}
                                onClick={() => softDeleteEquipment({ equipmentId: id })}
                            >
                                {t('actions:delete')}
                            </Button>
                            {/* ADD HERE*/}
                        </Space>
                    )
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.equipment !== null ? (
                        <EquipmentDetails details={data?.equipment} />
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

export { SingleEquipment };
