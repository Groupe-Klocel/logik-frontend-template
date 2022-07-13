import { ContentSpin, HeaderContent } from '@components';
import { showError } from '@helpers';
import { Layout } from 'antd';
import { useAuth } from 'context/AuthContext';
import { GetStockOwnerByIdQuery, useGetStockOwnerByIdQuery } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { EditStockOwnerForm } from '../Forms/EditStockOwnerForm';
import { stockOwnersRoutes } from '../Static/stockOwnersRoutes';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export type EditStockOwnerProps = {
    id: string | any;
    router: NextRouter;
};

const EditStockOwner: FC<EditStockOwnerProps> = ({ id, router }: EditStockOwnerProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetStockOwnerByIdQuery<GetStockOwnerByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...stockOwnersRoutes,
        {
            breadcrumbName: `${data?.stockOwner?.name}`
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
                title={`${t('common:stock-owner')} ${data?.stockOwner?.name}`}
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
                    <EditStockOwnerForm stockOwnerId={id} details={data?.stockOwner} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditStockOwner.displayName = 'EditStockOwner';

export { EditStockOwner };
