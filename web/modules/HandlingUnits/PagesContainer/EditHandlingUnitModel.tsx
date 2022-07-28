import { ContentSpin } from '@components';
import { Button, Layout, Modal, Space } from 'antd';
import { handlingUnitsSubRoutes } from 'modules/HandlingUnits/Static/handlingUnitsRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    GetHandlingUnitModelByIdQuery,
    SoftDeleteHandlingUnitModelMutation,
    SoftDeleteHandlingUnitModelMutationVariables,
    useGetHandlingUnitModelByIdQuery,
    useSoftDeleteHandlingUnitModelMutation
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { EditHandlingUnitModelForm } from '../Forms/EditHandlingUnitModelForm';
import { DeleteOutlined } from '@ant-design/icons';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditHandlingUnitModelProps {
    id: string | any;
    router: NextRouter;
}

const EditHandlingUnitModel: FC<EditHandlingUnitModelProps> = ({
    id,
    router
}: EditHandlingUnitModelProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

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

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    const { mutate, isLoading: deleteLoading } = useSoftDeleteHandlingUnitModelMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteHandlingUnitModelMutation,
                _variables: SoftDeleteHandlingUnitModelMutationVariables,
                _context: unknown
            ) => {
                router.push(`/handling-unit-model/${id}`);
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
                title={`${t('menu:handling-unit-model')} ${data?.handlingUnitModel?.name}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        {data?.handlingUnitModel?.status != 1005 ? (
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                loading={deleteLoading}
                                onClick={() =>
                                    softDeleteHandlingUnitModel({ handlingUnitModelId: id })
                                }
                            ></Button>
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditHandlingUnitModelForm
                        handlingUnitModelId={id}
                        details={data?.handlingUnitModel}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditHandlingUnitModel.displayName = 'EditHandlingUnitModel';

export { EditHandlingUnitModel };
