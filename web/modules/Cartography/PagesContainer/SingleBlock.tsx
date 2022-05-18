import { ContentSpin, HeaderContent, PageContentWrapper } from '@components';
import { showError, showSuccess } from '@helpers';
import { Button, Space, Typography } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    DeleteBlockMutation,
    DeleteBlockMutationVariables,
    GetBlockByIdQuery,
    useDeleteBlockMutation,
    useGetBlockByIdQuery,
    useGetBlockIdsQuery
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { BlockDetails } from '../Elements/BlockDetails';
import { blocksRoutes } from '../Static/cartographyRoutes';

export type SingleBlockProps = {
    id: string;
    router: NextRouter;
};
const SingleBlock: FC<SingleBlockProps> = ({ id, router }: SingleBlockProps) => {
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
            breadcrumbName: `${data?.block?.name}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteBlockMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBlockMutation,
                _variables: DeleteBlockMutationVariables,
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

    const deleteBlock = ({ id }: DeleteBlockMutationVariables) => {
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
                title={`${data?.block?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/blocks')}
                actionsRight={
                    <Space>
                        <Button loading={deleteLoading} onClick={() => deleteBlock({ id: id })}>
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.block !== null ? (
                        <BlockDetails details={data?.block} />
                    ) : (
                        <Typography>Block {id} does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </PageContentWrapper>
        </>
    );
};

export { SingleBlock };
