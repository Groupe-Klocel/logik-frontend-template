import { useAuth } from 'context/AuthContext';
import {
    DeleteArticleMutation,
    DeleteArticleMutationVariables,
    DeleteBlockMutation,
    DeleteBlockMutationVariables,
    GetBlockByIdQuery,
    useDeleteArticleMutation,
    useDeleteBlockMutation,
    useGetBlockByIdQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { blocksRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import { ContentSpin, HeaderContent, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { Button, Layout, Modal, Space, Typography } from 'antd';
import { BlockDetails } from '../Elements/BlockDetails';
import { showError, showSuccess } from '@helpers';
import { modalGlobalConfig } from 'antd/lib/modal/confirm';

export type SingleBlockTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleBlock: FC<SingleBlockTypeProps> = ({ id, router }: SingleBlockTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetBlockByIdQuery<GetBlockByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...blocksRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteBlockMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBlockMutation,
                _variables: DeleteBlockMutationVariables,
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

    const deleteBlock = ({ id }: DeleteBlockMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    //modal to handle delete confirmation

    return (
        <>
            <HeaderContent
                title={`${t('menu:block')} ${data?.block?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/blocks')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <Button loading={deleteLoading} onClick={() => deleteBlock({ id: id })}>
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
                    data.block !== null ? (
                        <BlockDetails details={data?.block} />
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

export { SingleBlock };
