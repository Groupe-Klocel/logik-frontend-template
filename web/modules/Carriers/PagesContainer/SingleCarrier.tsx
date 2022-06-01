import { HeaderContent, PageContentWrapper, ContentSpin } from '@components';
import { showSuccess, showError } from '@helpers';
import { Space, Button, Typography } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    DeleteCarrierMutation,
    DeleteCarrierMutationVariables,
    GetCarrierByIdQuery,
    useDeleteCarrierMutation,
    useGetCarrierByIdQuery
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { carriersRoutes } from '../Static/carriersRoutes';

export type SingleCarrierProps = {
    id: string;
    router: NextRouter;
};
const SingleCarrier: FC<SingleCarrierProps> = ({ id, router }: SingleCarrierProps) => {
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
            breadcrumbName: `${data?.carrier?.name}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteCarrierMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteCarrierMutation,
                _variables: DeleteCarrierMutationVariables,
                _context: any
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
        mutate({ id });
    };

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    return (
        <>
            <HeaderContent
                title={`${data?.carrier?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/carriers')}
                actionsRight={
                    <Space>
                        <Button loading={deleteLoading} onClick={() => deleteCarrier({ id: id })}>
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.carrier !== null ? (
                        <CarrierDetails details={data?.carrier} />
                    ) : (
                        <Typography>Carrier {id} does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </PageContentWrapper>
        </>
    );
};

export { SingleCarrier };
