import { AppHead, LinkButton } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

import { HeaderData, ListWithFilter } from '../modules/Crud/Components/ListWithFilter';
import { FilterTypeEnum } from '../modules/Crud/Components/ListSearchComponent';
import { ModeEnum, Table } from 'generated/graphql';
import { DeleteOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useAppState } from 'context/AppContext';
import { getModesFromPermissions, pathParams } from '@helpers';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlesPage: PageComponent = () => {
    const tableName = Table.Article;
    const queryName = 'articles';
    const resolverName = 'Article';

    const { permissions } = useAppState();
    const { t } = useTranslation();
    const modes = getModesFromPermissions(permissions, tableName);

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
            <ListWithFilter
                headerData={headerData}
                useColumns={[
                    'id',
                    'extras',
                    'created',
                    'createdBy',
                    'modified',
                    'modifiedBy',
                    'status',
                    'code',
                    'name'
                ]}
                sortableColumns={['name', 'code']}
                queryName={queryName}
                resolverName={resolverName}
                tableName={tableName}
                filterColumns={[
                    { name: 'name', type: FilterTypeEnum.String },
                    { name: 'code', type: FilterTypeEnum.String },
                    { name: 'status', type: FilterTypeEnum.Number },
                    { name: 'length', type: FilterTypeEnum.Number },
                    { name: 'width', type: FilterTypeEnum.Number },
                    { name: 'height', type: FilterTypeEnum.Number },
                    { name: 'baseUnitWeight', type: FilterTypeEnum.Number },
                    { name: 'boxWeight', type: FilterTypeEnum.Number },
                    { name: 'permanentProduct', type: FilterTypeEnum.Boolean }
                ]}
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
