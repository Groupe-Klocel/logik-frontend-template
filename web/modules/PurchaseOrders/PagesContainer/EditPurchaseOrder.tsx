import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { purchaseOrdersSubRoutes } from '../Static/purchaseOrdersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetPurchaseOrderByIdQuery, useGetPurchaseOrderByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditPurchaseOrderForm } from '../Forms/EditPurchaseOrderForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditPurchaseOrderLineProps {
    id: string | any;
    router: NextRouter;
}

const EditPurchaseOrder: FC<IEditPurchaseOrderLineProps> = ({ id, router }: IEditPurchaseOrderLineProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetPurchaseOrderByIdQuery<GetPurchaseOrderByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...purchaseOrdersSubRoutes,
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
                title={`${t('common:purchase-order')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditPurchaseOrderForm id={id} details={data?.purchaseOrder} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditPurchaseOrder.displayName = 'EditPurchaseOrder';

export { EditPurchaseOrder };
