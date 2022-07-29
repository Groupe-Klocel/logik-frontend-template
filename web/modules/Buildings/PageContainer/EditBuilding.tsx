import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { GetBuildingByIdQuery, useGetBuildingByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { buildingsRoutes } from 'modules/Buildings/Static/routes';
import { EditBuildingForm } from 'modules/Buildings/Forms/EditBuildingForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditBuildingProps {
    id: string | any;
    router: NextRouter;
}

const EditBuilding: FC<EditBuildingProps> = ({ id, router }: EditBuildingProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetBuildingByIdQuery<GetBuildingByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...buildingsRoutes,
        {
            breadcrumbName: `${data?.building?.name}`
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
                title={`${t('menu:building')} ${data?.building?.name}`}
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
                    <EditBuildingForm buildingId={id} details={data?.building} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditBuilding.displayName = 'EditBuilding';

export { EditBuilding };
