import { HeaderContent, PageContentWrapper, ContentSpin } from '@components';
import { showSuccess, showError } from '@helpers';
import { Modal, Space, Button, Typography } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    useGetCarrierByIdQuery,
    GetCarrierByIdQuery,
    useDeleteCarrierMutation,
    DeleteCarrierMutation,
    DeleteCarrierMutationVariables
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { CarrierDetails } from '../Elements/CarrierDetails';
import { carriersRoutes } from '../Static/carriersRoutes';

export type SingleCarrierTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleCarrier: FC<SingleCarrierTypeProps> = ({ id, router }: SingleCarrierTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetCarrierByIdQuery<GetCarrierByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...carriersRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteCarrierMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteCarrierMutation,
                _variables: DeleteCarrierMutationVariables,
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

    const deleteCarrier = ({ id }: DeleteCarrierMutationVariables) => {
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
                title={`${t('menu:carrier')} ${data?.carrier?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/carriers')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <Button loading={deleteLoading} onClick={() => deleteCarrier({ id: id })}>
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {/* {!!data} 
                    <Typography >Content Does not exist</Typography> */}
                {data && !isLoading ? (
                    data.carrier !== null ? (
                        <CarrierDetails details={data?.carrier} />
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

export { SingleCarrier };
