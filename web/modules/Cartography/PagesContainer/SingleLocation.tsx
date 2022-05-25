import { useAuth } from 'context/AuthContext';
import {
    DeleteArticleMutation,
    DeleteArticleMutationVariables,
    DeleteLocationMutation,
    DeleteLocationMutationVariables,
    GetLocationByIdQuery,
    useDeleteArticleMutation,
    useDeleteLocationMutation,
    useGetLocationByIdQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { locationsRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import { ContentSpin, HeaderContent, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { Button, Layout, Modal, Space, Typography } from 'antd';
import { LocationDetails } from '../Elements/LocationDetails';
import { showError, showSuccess } from '@helpers';
import { modalGlobalConfig } from 'antd/lib/modal/confirm';

export type SingleLocationTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleLocation: FC<SingleLocationTypeProps> = ({ id, router }: SingleLocationTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetLocationByIdQuery<GetLocationByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...locationsRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteLocationMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteLocationMutation,
                _variables: DeleteLocationMutationVariables,
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

    const deleteLocation = ({ id }: DeleteLocationMutationVariables) => {
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
                title={`${t('menu:location')} ${data?.location?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/locations')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <Button loading={deleteLoading} onClick={() => deleteLocation({ id: id })}>
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
                    data.location !== null ? (
                        <LocationDetails details={data?.location} />
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

export { SingleLocation };
