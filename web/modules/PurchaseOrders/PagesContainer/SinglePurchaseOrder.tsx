import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button } from 'antd';
import { purchaseOrdersRoutes } from 'modules/PurchaseOrders/Static/purchaseOrdersRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    GetPurchaseOrderByIdQuery,
    useGetPurchaseOrderByIdQuery,
    useDeletePurchaseOrderMutation,
    DeletePurchaseOrderMutation,
    DeletePurchaseOrderMutationVariables
} from 'generated/graphql';
import { PurchaseOrderDetails } from 'modules/PurchaseOrders/Elements/PurchaseOrderDetails';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISinglePurchaseOrderProps {
    id: string | any;
    router: NextRouter;
}

const SinglePurchaseOrder: FC<ISinglePurchaseOrderProps> = ({ id, router }: ISinglePurchaseOrderProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const { isLoading, data, error } = useGetPurchaseOrderByIdQuery<GetPurchaseOrderByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeletePurchaseOrderMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeletePurchaseOrderMutation,
                _variables: DeletePurchaseOrderMutationVariables,
                _context: any
            ) => {
                router.back();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deletePurchaseOrder = ({ id }: DeletePurchaseOrderMutationVariables) => {
        mutate({ id });
    };

    const breadsCrumb = [
        ...purchaseOrdersRoutes,
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
                title={`${t('common:purchaseOrder')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:edit')}
                            path={`/purchase-orders/edit/${id}`}
                            type="primary"
                        />
                        <Button
                            loading={deleteLoading}
                            onClick={() => deletePurchaseOrder({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data?.purchaseOrder && !isLoading ? (
                    <PurchaseOrderDetails details={data?.purchaseOrder} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SinglePurchaseOrder.displayName = 'SinglePurchaseOrder';

export { SinglePurchaseOrder };
