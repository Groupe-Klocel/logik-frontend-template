import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { GetFeatureTypeDetailByIdQuery, useGetFeatureTypeDetailByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { featuresTypesRoutes } from '../Static/articlesRoutes';
import { EditFeatureTypeDetailForm } from '../Forms/EditFeatureTypeDetailForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditFeatureTypeDetailProps {
    id: string | any;
    router: NextRouter;
}

const EditFeatureTypeDetail: FC<EditFeatureTypeDetailProps> = ({
    id,
    router
}: EditFeatureTypeDetailProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetFeatureTypeDetailByIdQuery<
        GetFeatureTypeDetailByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...featuresTypesRoutes,
        {
            breadcrumbName: `${data?.featureTypeDetail?.featureTypeText}_${data?.featureTypeDetail?.featureCode?.name}`
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
                title={`${t('menu:feature-type-detail')}: ${
                    data?.featureTypeDetail?.featureTypeText
                }_${data?.featureTypeDetail?.featureCode?.name}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                // actionsRight={
                //   <Space>
                //     <Button onClick={()=> alert()} type="primary">
                //         {t('actions:update')}
                //     </Button>
                //     <Button onClick={() => router.back()}>
                //         {t('actions:cancel')}
                //     </Button>
                //   </Space>
                // }
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditFeatureTypeDetailForm
                        featureTypeDetailId={id}
                        details={data?.featureTypeDetail}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditFeatureTypeDetail.displayName = 'EditFeatureTypeDetail';

export { EditFeatureTypeDetail };
