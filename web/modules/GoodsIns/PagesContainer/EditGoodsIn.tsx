import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { goodsInsSubRoutes } from '../Static/goodsInsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetGoodsInByIdQuery, useGetGoodsInByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditGoodsInForm } from '../Forms/EditGoodsInForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditGoodsInLineProps {
    id: string | any;
    router: NextRouter;
}

const EditGoodsIn: FC<IEditGoodsInLineProps> = ({ id, router }: IEditGoodsInLineProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetGoodsInByIdQuery<GetGoodsInByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

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
                onBack={() => router.back()}
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditGoodsInForm goodsInId={id} details={data?.goodsIn} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditGoodsIn.displayName = 'EditGoodsIn';

export { EditGoodsIn };
