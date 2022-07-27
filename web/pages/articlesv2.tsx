import { AppHead, LinkButton } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

import { ArticleModel } from 'models/ArticleModel';
import { HeaderData, ListComponentWithFilter } from '../modules/Crud/ListComponentWithFilter';
import { ModeEnum } from 'generated/graphql';
import { DeleteOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useAppState } from 'context/AppContext';
import { getModesFromPermissions, pathParams } from '@helpers';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlesPage: PageComponent = () => {
    const { permissions } = useAppState();
    const { t } = useTranslation();
    const modes = getModesFromPermissions(permissions, ArticleModel.tableName);

    let headerData: HeaderData = {
        title: t('common:articles'),
        routes: articlesSubRoutes,
        actionsComponent: null
    };
    if (modes.length > 0 || modes.includes(ModeEnum.Write))
        headerData.actionsComponent = (
            <LinkButton
                title={t('actions:add2', { name: t('common:article') })}
                path="/add-article"
                type="primary"
            />
        );

    return (
        <>
            <AppHead title="Bee V2" />
            <ListComponentWithFilter
                headerData={headerData}
                dataModel={ArticleModel}
                actionColumns={[
                    {
                        title: 'actions:actions',
                        key: 'actions',
                        render: (record: { id: string }) => (
                            <Space>
                                <LinkButton
                                    icon={<EyeTwoTone />}
                                    path={pathParams('/article/[id]', record.id)}
                                />
                                {modes.length > 0 && modes.includes(ModeEnum.Write) ? (
                                    <Button
                                        icon={<DeleteOutlined />}
                                        danger
                                        onClick={() => alert(`delete article N° ${record.id}`)}
                                    />
                                ) : (
                                    <></>
                                )}
                            </Space>
                        )
                    }
                ]}
            />
        </>
    );
};

ArticlesPage.layout = MainLayout;

export default ArticlesPage;
