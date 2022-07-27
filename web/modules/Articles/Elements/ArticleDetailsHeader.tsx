import { LinkButton } from '@components';
import { Space, Button } from 'antd';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    useDeleteArticleMutation,
    DeleteArticleMutation,
    DeleteArticleMutationVariables,
    ModeEnum
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useState } from 'react';
import { NextRouter } from 'next/router';
import { HeaderContent } from '@components';
import { getModesFromPermissions, showError, showSuccess } from '@helpers';
import { useAppState } from 'context/AppContext';

export interface ISingleItemProps {
    id: string | any;
    router: NextRouter;
    tableName: string;
}

const ArticleDetailsHeader: FC<ISingleItemProps> = (props: ISingleItemProps) => {
    const { t } = useTranslation();
    const { permissions } = useAppState();
    const modes = getModesFromPermissions(permissions, props.tableName);

    const { graphqlRequestClient } = useAuth();

    const [isCalculating, setIsCalculating] = useState(false);
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

    const updateBoxQuantity = async () => {
        setIsCalculating(true);
        const res = await fetch(`/api/article/update-quantity/${props.id}`);
        if (!res.ok) {
            const message = t('An error has occured: ') + res.status;
            showError(t('messages:error-update-data'));
            setIsCalculating(false);
        }
        const qntData = await res.json();

        showSuccess(t('messages:success-update-data'));
        setIsCalculating(false);
    };

    return (
        <HeaderContent
            title={`${t('common:article')} ${props.id}`}
            routes={breadsCrumb}
            onBack={() => props.router.push('/articles')}
            actionsRight={
                modes.length > 0 || !modes.includes(ModeEnum.Write) ? (
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
    );
};

export { ArticleDetailsHeader };
