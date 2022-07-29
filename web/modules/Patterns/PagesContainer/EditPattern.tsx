import { Layout } from 'antd';
import { ContentSpin, HeaderContent } from '@components';
import { patternsRoutes } from 'modules/Patterns/Static/patternsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { EditPatternForm } from 'modules/Patterns/Forms/EditPatternForm';
import styled from 'styled-components';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import { GetPatternByIdQuery, useGetPatternByIdQuery } from 'generated/graphql';
import { showError } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export interface IEditPatternProps {
    id: string | any;
    router: NextRouter;
}

export const EditPattern: FC<IEditPatternProps>  = ({id, router} : IEditPatternProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetPatternByIdQuery<GetPatternByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...patternsRoutes,
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
                    <EditPatternForm id={id} details={data?.pattern} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};
