import { Layout } from 'antd';
import { ContentSpin, HeaderContent } from '@components';
import { patternPathsRoutes } from 'modules/PatternPaths/Static/patternPathRoutes';
import useTranslation from 'next-translate/useTranslation';
import { EditPatternPathForm } from 'modules/PatternPaths/Forms/EditPatternPathForm';
import styled from 'styled-components';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import { GetPatternPathByIdQuery, useGetPatternPathByIdQuery } from 'generated/graphql';
import { showError } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export interface IEditPatternPathProps {
    id: string | any;
    router: NextRouter;
}

export const EditPatternPath: FC<IEditPatternPathProps>  = ({id, router} : IEditPatternPathProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetPatternPathByIdQuery<GetPatternPathByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...patternPathsRoutes,
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
                    <EditPatternPathForm id={id} details={data?.patternPath} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};
