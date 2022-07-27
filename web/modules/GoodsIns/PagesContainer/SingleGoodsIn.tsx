import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Typography } from 'antd';
import { goodsInsSubRoutes } from 'modules/GoodsIns/Static/goodsInsRoutes';
import { GoodsInDetails } from 'modules/GoodsIns/Elements/GoodsInDetails';
import useTranslation from 'next-translate/useTranslation';
import {
    useDeleteGoodsInLineMutation,
    DeleteGoodsInLineMutation,
    DeleteGoodsInLineMutationVariables,
    Table,
    ModeEnum,
    useGetGoodsInLinesQuery,
    GetGoodsInLinesQuery,
    useGetGoodsInByIdQuery,
    GetGoodsInByIdQuery
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { useAppState } from 'context/AppContext';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleGoodsInLineProps {
    id: string | any;
    router: NextRouter;
}

const SingleGoodsIn: FC<ISingleGoodsInLineProps> = ({ id, router }: ISingleGoodsInLineProps) => {
    const { t } = useTranslation();

    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.GoodsInLine;
        })?.mode;

    const { graphqlRequestClient } = useAuth();


    const { isLoading, data, error } = useGetGoodsInByIdQuery<GetGoodsInByIdQuery, Error>(
        graphqlRequestClient,
        {
           id: id
        }
    );
    console.log(data);

    const breadsCrumb = [
        ...goodsInsSubRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteGoodsInLineMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteGoodsInLineMutation,
                _variables: DeleteGoodsInLineMutationVariables,
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

    const deleteGoodsInLine= ({ id }: DeleteGoodsInLineMutationVariables) => {
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
                title={`${t('common:goods-in')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.push('/goods-ins')}
                actionsRight={
                    !!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Space>
                            <LinkButton
                                title={t('actions:edit')}
                                path={`/goods-in/edit/${id}`}
                                type="primary"
                            />
                            <Button
                                loading={deleteLoading}
                                onClick={() => deleteGoodsInLine({ id: id })}
                            >
                                {t('actions:delete')}
                            </Button>
                        </Space>
                    ) : (
                        <></>
                    )
                }
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    data.goodsIn !== null ? (
                        <GoodsInDetails details={data?.goodsIn} />
                    ) : (
                        <Typography>Content Does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SingleGoodsIn.displayName = 'SingleGoodsIn';

export { SingleGoodsIn };
