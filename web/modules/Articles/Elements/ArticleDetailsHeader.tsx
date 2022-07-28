import { LinkButton } from '@components';
import { Space, Button } from 'antd';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';

import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import { HeaderContent } from '@components';
import { getModesFromPermissions, showError, showSuccess, useDelete } from '@helpers';
import { useAppState } from 'context/AppContext';
import { ModelType } from 'models/Models';
import { ModeEnum } from 'generated/graphql';

export interface ISingleItemProps {
    id: string | any;
    router: NextRouter;
    tableName: string;
    dataModel: ModelType;
}

const ArticleDetailsHeader: FC<ISingleItemProps> = (props: ISingleItemProps) => {
    const { t } = useTranslation();
    const { permissions } = useAppState();
    const modes = getModesFromPermissions(permissions, props.tableName);

    const breadsCrumb = [
        ...articlesSubRoutes,
        {
            breadcrumbName: `${props.id}`
        }
    ];

    const {
        isLoading: deleteLoading,
        result: deleteResult,
        mutate: deleteArticle
    } = useDelete(props.dataModel.queryNames.delete);

    useEffect(() => {
        if (!(deleteResult && deleteResult.data)) return;

        if (deleteResult.success) {
            showSuccess(t('messages:success-deleted'));
            props.router.back();
        } else {
            showError(t('messages:error-deleting-data'));
        }
    }, [deleteResult]);

    const updateBoxQuantity = async () => {
        const res = await fetch(`/api/article/update-quantity/${props.id}`);
        if (!res.ok) {
            const message = t('An error has occured: ') + res.status;
            showError(t('messages:error-update-data'));
        }
        const qntData = await res.json();

        showSuccess(t('messages:success-update-data'));
    };

    return (
        <HeaderContent
            title={`${t('common:article')} ${props.id}`}
            routes={breadsCrumb}
            onBack={() => props.router.push('/articlesv2')}
            actionsRight={
                modes.length > 0 || !modes.includes(ModeEnum.Write) ? (
                    <Space>
                        <Button onClick={updateBoxQuantity} type="primary">
                            {t('actions:update-quantity')}
                        </Button>
                        <LinkButton
                            title={t('actions:edit')}
                            path={`/articlev2/edit/${props.id}`}
                            type="primary"
                        />
                        <Button loading={deleteLoading} onClick={() => deleteArticle(props.id)}>
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
