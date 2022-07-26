import { Layout } from 'antd';
import { ContentSpin, HeaderContent } from '@components';
import { managePatternPathLocation } from 'modules/PatternPaths/Static/patternPathRoutes';
import useTranslation from 'next-translate/useTranslation';
// import { ManagePatternPathLocationForm } from 'modules/PatternPaths/Forms/ManagePatternPathLocationForm';
import styled from 'styled-components';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import { GetPatternPathByIdQuery, useGetPatternPathByIdQuery } from 'generated/graphql';
import { showError } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export interface IManagePatternPathLocationProps {
    id: string | any;
    router: NextRouter;
}

export const ManagePatternPathLocation: FC<IManagePatternPathLocationProps>  = ({id, router} : IManagePatternPathLocationProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetPatternPathByIdQuery<GetPatternPathByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...managePatternPathLocation,
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
                title={t('d:manage-pattern-path-location')} 
                routes={breadsCrumb}
                onBack={() => router.back()}    
            />
            <StyledPageContent>
                {/* {data && !isLoading ? (
                    <ManagePatternPathLocationForm id={id} details={data?.patternPath} />
                ) : (
                    <ContentSpin />
                )} */}
                locations details
            </StyledPageContent>
        </>
    );
};
