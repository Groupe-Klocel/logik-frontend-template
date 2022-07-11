import { Layout } from 'antd';
import { ContentSpin, HeaderContent } from '@components';
import { addStockStatusRoutes, stocksRoutes } from 'modules/Stocks/Static/stocksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { EditStockStatusForm } from 'modules/Stocks/Forms/EditStockStatusForm';
import styled from 'styled-components';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import { GetParameterByIdQuery, useGetParameterByIdQuery } from 'generated/graphql';
import { showError } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export interface IEditStockStatusProps {
    id: string | any;
    router: NextRouter;
}

export const EditStockStatus: FC<IEditStockStatusProps>  = ({id, router} : IEditStockStatusProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetParameterByIdQuery<GetParameterByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...stocksRoutes,
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
                title={t('stock-statuses')} 
                routes={breadsCrumb}
                onBack={() => router.back()}    
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditStockStatusForm id={id} details={data?.parameter} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};
