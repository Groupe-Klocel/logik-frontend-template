import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button } from 'antd';
import { barcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    GetPurchaseOrderLineByIdQuery,
    useGetPurchaseOrderLineByIdQuery,
    useDeletePurchaseOrderLineMutation,
    DeletePurchaseOrderLineMutation,
    DeletePurchaseOrderLineMutationVariables
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { PurchaseOrderLineDetails } from '../Elements/PurchaseOrderLineDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISinglePurchaseOrderLineProps {
    id: string | any;
    router: NextRouter;
}

const SinglePurchaseOrderLine: FC<ISinglePurchaseOrderLineProps> = ({ id, router }: ISinglePurchaseOrderLineProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const { isLoading, data, error } = useGetPurchaseOrderLineByIdQuery<GetPurchaseOrderLineByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeletePurchaseOrderLineMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeletePurchaseOrderLineMutation,
                _variables: DeletePurchaseOrderLineMutationVariables,
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

    const deletePurchaseOrderLine = ({ id }: DeletePurchaseOrderLineMutationVariables) => {
        mutate({ id });
    };

    const breadsCrumb = [
        ...barcodesRoutes,
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
                title={`${t('common:purchase-order-line')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:edit')}
                            path={`/purchase-order-lines/edit/${id}`}
                            type="primary"
                        />
                        <Button
                            loading={deleteLoading}
                            onClick={() => deletePurchaseOrderLine({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data?.purchaseOrderLine && !isLoading ? (
                    <PurchaseOrderLineDetails details={data?.purchaseOrderLine} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SinglePurchaseOrderLine.displayName = 'SinglePurchaseOrderLine';

export { SinglePurchaseOrderLine };
