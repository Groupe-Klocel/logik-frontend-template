import { DeleteOutlined, EditTwoTone } from '@ant-design/icons';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import { pathParams, showError, showSuccess } from '@helpers';
import { Button, Modal, Space, Typography } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    GetStockOwnerByIdQuery,
    SoftDeleteStockOwnerMutation,
    SoftDeleteStockOwnerMutationVariables,
    useGetStockOwnerByIdQuery,
    useSoftDeleteStockOwnerMutation
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { StockOwnerDetails } from '../Elements/StockOwnerDetails';
import { stockOwnersRoutes } from '../Static/stockOwnersRoutes';

export type SingleStockOwnerTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleStockOwner: FC<SingleStockOwnerTypeProps> = ({
    id,
    router
}: SingleStockOwnerTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

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

    const { mutate, isLoading: softDeleteLoading } = useSoftDeleteStockOwnerMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteStockOwnerMutation,
                _variables: SoftDeleteStockOwnerMutationVariables,
                _context: unknown
            ) => {
                router.back();
                if (!softDeleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const softDeleteStockOwner = ({ stockOwnerId }: SoftDeleteStockOwnerMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ stockOwnerId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    return (
        <>
            <HeaderContent
                title={`${t('menu:stock-owner')} ${data?.stockOwner?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/stock-owners')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/stock-owner/edit/[id]', id)}
                        ></LinkButton>
                        {data?.stockOwner?.status != 1005 ? (
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                loading={softDeleteLoading}
                                onClick={() => softDeleteStockOwner({ stockOwnerId: id })}
                            ></Button>
                        ) : (
                            <></>
                        )}
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {/* {!!data} 
                    <Typography >Content Does not exist</Typography> */}
                {data && !isLoading ? (
                    data.stockOwner !== null ? (
                        <StockOwnerDetails details={data?.stockOwner} />
                    ) : (
                        <Typography>Content Does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </PageContentWrapper>
        </>
    );
};

export { SingleStockOwner };
