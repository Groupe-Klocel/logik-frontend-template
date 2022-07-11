import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Modal } from 'antd';
import { stocksRoutes } from 'modules/Stocks/Static/stocksRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    useGetParameterByIdQuery,
    GetParameterByIdQuery,
    useDeleteParameterMutation,
    DeleteParameterMutation,
    DeleteParameterMutationVariables
} from 'generated/graphql';

import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { StockStatusDetails } from '../Elements/StockStatusDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleStockStatusProps {
    id: string | any;
    router: NextRouter;
}

const SingleStockStatus: FC<ISingleStockStatusProps> = ({ id, router }: ISingleStockStatusProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const [parameter, setParameter] = useState<any>();

    const { isLoading, data, error } = useGetParameterByIdQuery<GetParameterByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeleteParameterMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteParameterMutation,
                _variables: DeleteParameterMutationVariables,
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

    const deleteParameter = ({ parameterId }: DeleteParameterMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ parameterId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const breadsCrumb = [
        ...stocksRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    useEffect(() => {
        const newData = {
            ...data?.parameter,
            translation: JSON.stringify(data?.parameter?.translation)
        };
        setParameter(newData);
    }, [data])

    return (
        <>
            <HeaderContent
                title={`${t('common:stockStatus')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:edit')}
                            path={`/stock-statuses/edit/${id}`}
                            type="primary"
                        />
                        <Button
                            loading={deleteLoading}
                            onClick={() => deleteParameter({ parameterId: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data?.parameter && !isLoading ? (
                    <StockStatusDetails details={parameter} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SingleStockStatus.displayName = 'SingleStockStatus';

export { SingleStockStatus };
