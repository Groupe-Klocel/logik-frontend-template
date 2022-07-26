import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { featuresCodesRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetFeatureCodeByIdQuery, useGetFeatureCodeByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditFeatureCodeForm } from '../Forms/EditFeatureCodeForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditFeatureCodeProps {
    id: string | any;
    router: NextRouter;
}

const EditFeatureCode: FC<IEditFeatureCodeProps> = ({ id, router }: IEditFeatureCodeProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetFeatureCodeByIdQuery<GetFeatureCodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...featuresCodesRoutes,
        {
            breadcrumbName: `${data?.featureCode?.name}`
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
                title={`${t('menu:feature-code')}: ${data?.featureCode?.name}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditFeatureCodeForm featureCodeId={id} details={data?.featureCode} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditFeatureCode.displayName = 'EditFeatureCode';

export { EditFeatureCode };
