import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Typography } from 'antd';
import { goodsInsSubRoutes } from 'modules/GoodsIns/Static/goodsInsRoutes';
import { GoodsInLineDetails } from 'modules/GoodsIns/Elements/GoodsInLineDetails';
import useTranslation from 'next-translate/useTranslation';
import {
    Table,
    ModeEnum,
    useGetGoodsInLinesQuery,
    GetGoodsInLinesQuery,
    useGetGoodsInLineByIdQuery,
    GetGoodsInLineByIdQuery,
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

export interface ISingleGoodsInLineLineProps {
    id: string | any;
    router: NextRouter;
}

const SingleGoodsInLine: FC<ISingleGoodsInLineLineProps> = ({ id, router }: ISingleGoodsInLineLineProps) => {
    const { t } = useTranslation();

    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.GoodsInLine;
        })?.mode;

    const { graphqlRequestClient } = useAuth();


    const { isLoading, data, error } = useGetGoodsInLineByIdQuery<GetGoodsInLineByIdQuery, Error>(
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
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    data.goodsInLine !== null ? (
                        <GoodsInLineDetails details={data?.goodsInLine} />
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

SingleGoodsInLine.displayName = 'SingleGoodsInLine';

export { SingleGoodsInLine };
