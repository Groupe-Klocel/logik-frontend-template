import { useAuth } from 'context/AuthContext';
import {
    DeleteBlockMutation,
    DeleteBlockMutationVariables,
    GetBlockByIdQuery,
    useDeleteBlockMutation,
    useGetBlockByIdQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { blocksRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Layout, Modal, Space, Typography } from 'antd';
import { BlockDetails } from '../Elements/BlockDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

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
                        <LinkButton
                            title={t('actions:list', { name: t('menu:locations') })}
                            path={'/locations'}
                        />
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/block/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteBlock({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
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
