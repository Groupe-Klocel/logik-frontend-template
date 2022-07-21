import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Typography } from 'antd';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import DefaultErrorPage from 'next/error';
import {
    GetArticleByIdQuery,
    useGetArticleByIdQuery,
    useDeleteArticleMutation,
    DeleteArticleMutation,
    DeleteArticleMutationVariables,
    Table,
    ModeEnum
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess, useDetail } from '@helpers';
import { useAppState } from 'context/AppContext';
import { gql } from 'graphql-request';
import { ItemDetails } from './ItemDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleItemProps {
    id: string | any;
    router: NextRouter;
    tableName: string;
    queryName: string;
    useColumns: Array<string>;
}

const SingleItem: FC<ISingleItemProps> = (props: ISingleItemProps) => {
    const { t } = useTranslation();

    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == props.tableName;
        })?.mode;

    const { graphqlRequestClient } = useAuth();

    const [isCalculating, setIsCalculating] = useState(false);

    const { isLoading, data, error } = useDetail(props.id, props.queryName, props.useColumns);

    const breadsCrumb = [
        ...articlesSubRoutes,
        {
            breadcrumbName: `${props.id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteArticleMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleMutation,
                _variables: DeleteArticleMutationVariables,
                _context: any
            ) => {
                props.router.back();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteArticle = ({ id }: DeleteArticleMutationVariables) => {
        mutate({ id });
    };

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    const updateBoxQuantity = async () => {
        setIsCalculating(true);
        const res = await fetch(`/api/article/update-quantity/${props.id}`);
        if (!res.ok) {
            const message = t('An error has occured: ') + res.status;
            showError(t('messages:error-update-data'));
            setIsCalculating(false);
        }
        const qntData = await res.json();

        if (data?.article) {
            // data.article.boxQuantity = qntData.quantity;
            // router.reload();
            showSuccess(t('messages:success-update-data'));
            // forceUpdate();
        }
        setIsCalculating(false);
    };

    return (
        <>
            <HeaderContent
                title={`${t('common:article')} ${props.id}`}
                routes={breadsCrumb}
                onBack={() => props.router.push('/articles')}
                actionsRight={
                    !!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Space>
                            <Button onClick={updateBoxQuantity} type="primary">
                                {t('actions:update-quantity')}
                            </Button>
                            <LinkButton
                                title={t('actions:edit')}
                                path={`/article/edit/${props.id}`}
                                type="primary"
                            />
                            <Button
                                loading={deleteLoading}
                                onClick={() => deleteArticle({ id: props.id })}
                            >
                                {t('actions:delete')}
                            </Button>
                        </Space>
                    ) : (
                        <></>
                    )
                }
            />
            <StyledPageContent>
                {/* {!!data} 
                    <Typography >Content Does not exist</Typography> */}
                {data && !isLoading && !isCalculating ? (
                    data.article !== null ? (
                        <ItemDetails details={data?.article} />
                    ) : (
                        <Typography>Content Does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SingleItem.displayName = 'SingleItem';

export { SingleItem };
