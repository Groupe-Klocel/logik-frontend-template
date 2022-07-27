import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Modal } from 'antd';
import { purchaseOrdersSubRoutes } from 'modules/PurchaseOrders/Static/purchaseOrdersRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    GetPurchaseOrderByIdQuery,
    useGetPurchaseOrderByIdQuery,
    useDeletePurchaseOrderMutation,
    DeletePurchaseOrderMutation,
    DeletePurchaseOrderMutationVariables,
    Table,
    ModeEnum,
    useListConfigsForAScopeQuery,
    useSoftDeletePurchaseOrderMutation,
    SoftDeletePurchaseOrderMutation,
    SoftDeletePurchaseOrderMutationVariables
} from 'generated/graphql';
import { PurchaseOrderDetails } from 'modules/PurchaseOrders/Elements/PurchaseOrderDetails';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { useAppState } from 'context/AppContext';

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
    const { permissions } = useAppState();
    const [statusTexts, setStatusTexts] = useState<Array<any>>();
    const [typeTexts, setTypeTexts] = useState<Array<any>>();
    const [lineNumer, setLineNumber] = useState<number | undefined>();

    const modePO =
    !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.PurchaseOrder;
        })?.mode;
        // setModePO(_modePO);

    const statusTextList = useListConfigsForAScopeQuery(
        graphqlRequestClient,
        {
            scope: 'purchase_order_status'
        }
    )

    useEffect(()=> {
        if (statusTextList) {
            setStatusTexts(statusTextList?.data?.listConfigsForAScope);
        }
    }, [statusTextList])

    const getStatusCodeByText = (text: string) => {
        // return statusTexts?.find((s: any) => {
        //     return s.text == text;
        // })
        const result =  statusTexts?.find((s: any) => {
            return s.text == text;
        })
        console.log('status result', result)
        return result?.code
    }

    const typeTextList = useListConfigsForAScopeQuery(
        graphqlRequestClient,
        {
            scope: 'purchase_order_type'
        }
    )

    useEffect(()=> {
        if (typeTextList) {
            setTypeTexts(typeTextList?.data?.listConfigsForAScope);
        }
    }, [typeTextList])
    
    const getPurchaseOrderTypeByText = (text: string) => {
        const result = typeTexts?.find((s: any) => {
            return s.text == text;
        });
        console.log('type result', result)
        return result?.code;
    }

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
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

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

    const printPurchaseOrder = ({id} : DeletePurchaseOrderMutationVariables) => {
        console.log('print purchase order')
    }

    const {mutate: softDeleteMutate, isLoading: softDeleteLoading} = useSoftDeletePurchaseOrderMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeletePurchaseOrderMutation,
                _variables: SoftDeletePurchaseOrderMutationVariables,
                _context: any
            ) => {
                if (!softDeleteLoading) {
                    showSuccess(t('messages:success-closed'));
                }
            },
            onError: () => {
                showError(t('messages:error-closing-data'));
            }
        }
    );
    const softDeletePurchaseOrder = ({ purchaseOrderId }: SoftDeletePurchaseOrderMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                softDeleteMutate({purchaseOrderId})
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    }

    const getPOLineNumber = (num: number | undefined) => {
        setLineNumber(num);
    }

    return (
        <>
            <HeaderContent
                title={`${t('common:purchase-order')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    !!modePO && modePO.toUpperCase() == ModeEnum.Write ?
                    (
                        <Space>
                            {(
                                data?.purchaseOrder?.status && 
                                data?.purchaseOrder?.status <= getStatusCodeByText('Closed') 
                                // lineNumer
                            ) ? (
                                <Button
                                    type="primary"
                                    onClick={() => printPurchaseOrder({ id: id })}
                                >
                                    {t('actions:print')}
                                </Button>
                            ) : (
                                <></>
                            )}
                            {(
                                data?.purchaseOrder?.status && 
                                data?.purchaseOrder?.status <= getStatusCodeByText('In progress') 
                                // lineNumer
                            ) ? (
                                <LinkButton
                                    title={t('actions:edit')}
                                    path={`/purchase-orders/edit/${id}`}
                                    type="primary"
                                />
                            ) : (
                                <></>
                            )}
                            {(
                                data?.purchaseOrder?.status && 
                                data?.purchaseOrder?.status < getStatusCodeByText('Closed') 
                                // lineNumer
                            ) ? (
                                <Button
                                    type="primary"
                                    onClick={() => softDeletePurchaseOrder({purchaseOrderId: id})}
                                >
                                    {t('actions:close')}
                                </Button>
                            ) : (
                                <></>
                            )}
                            {(
                                data?.purchaseOrder?.status && 
                                data?.purchaseOrder?.status <= getStatusCodeByText('In progress') && 
                                data.purchaseOrder.type != getPurchaseOrderTypeByText('L3')
                            ) ? (
                                <Button
                                    loading={deleteLoading}
                                    onClick={() => deletePurchaseOrder({ id: id })}
                                >
                                    {t('actions:delete')}
                                </Button>
                            ) : (
                                <></>
                            )}
                            
                        </Space>
                    )
                    :(
                        <></>
                    )
                    
                    
                }
            />
            <StyledPageContent>
                {data?.purchaseOrder && !isLoading ? (
                    <PurchaseOrderDetails details={data?.purchaseOrder} getPOLineNumber={getPOLineNumber}/>
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SinglePurchaseOrder.displayName = 'SinglePurchaseOrder';

export { SinglePurchaseOrder };
