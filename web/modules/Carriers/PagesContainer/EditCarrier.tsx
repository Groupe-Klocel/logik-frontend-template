import { HeaderContent, ContentSpin } from '@components';
import { showError } from '@helpers';
import { Layout } from 'antd';
import { useAuth } from 'context/AuthContext';
import { useGetCarrierByIdQuery, GetCarrierByIdQuery } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { EditCarrierForm } from '../Forms/EditCarrierForm';
import { carriersRoutes } from '../Static/carriersRoutes';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export type EditCarrierProps = {
    id: string | any;
    router: NextRouter;
};

const EditCarrier: FC<EditCarrierProps> = ({ id, router }: EditCarrierProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetCarrierByIdQuery<GetCarrierByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...carriersRoutes,
        {
            breadcrumbName: `${data?.carrier?.name}`
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
                title={`${t('common:carrier')} ${data?.carrier?.name}`}
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
                    <EditCarrierForm carrierId={id} details={data?.carrier} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditCarrier.displayName = 'EditCarrier';

export { EditCarrier };
