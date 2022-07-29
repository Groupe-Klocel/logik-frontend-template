import { AppHead, LinkButton } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

import { ArticleModel } from 'models/ArticleModel';
import { HeaderData, ListComponentWithFilter } from '../modules/Crud/ListComponentWithFilter';
import { ModeEnum } from 'generated/graphql';
import { useAppState } from 'context/AppContext';
import { getModesFromPermissions, pathParams } from '@helpers';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlesPage: PageComponent = () => {
    const { permissions } = useAppState();
    const { t } = useTranslation();
    const modes = getModesFromPermissions(permissions, ArticleModel.tableName);

    const headerData: HeaderData = {
        title: t('common:articles'),
        routes: articlesSubRoutes,
        actionsComponent:
            modes.length > 0 && modes.includes(ModeEnum.Write) ? (
                <LinkButton
                    title={t('actions:add2', { name: t('common:article') })}
                    path="/add-articlev2"
                    type="primary"
                />
            ) : null
    };

    return (
        <>
            <AppHead title="Bee V2" />
            <ListComponentWithFilter
                headerData={headerData}
                dataModel={ArticleModel}
                routeDetailPage={'/articlev2/:id'}
            />
        </>
    );
};

ArticlesPage.layout = MainLayout;

export default ArticlesPage;
