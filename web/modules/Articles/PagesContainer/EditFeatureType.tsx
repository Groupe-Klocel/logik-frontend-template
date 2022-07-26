import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { featuresTypesRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetParameterByIdQuery, useGetParameterByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditFeatureTypeForm } from '../Forms/EditFeatureTypeForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditFeatureTypeProps {
    id: string | any;
    router: NextRouter;
}

const EditFeatureType: FC<IEditFeatureTypeProps> = ({ id, router }: IEditFeatureTypeProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetParameterByIdQuery<GetParameterByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...featuresTypesRoutes,
        {
            breadcrumbName: `${data?.parameter?.value}`
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
                title={`${t('menu:feature-type')}: ${data?.parameter?.value}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditFeatureTypeForm featureTypeId={id} details={data?.parameter} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditFeatureType.displayName = 'EditFeatureType';

export { EditFeatureType };
