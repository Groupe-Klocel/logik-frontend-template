import { AppHead, LinkButton } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

import { ListWithFilter } from '../modules/Crud/ListWithFilter';
import { FilterTypeEnum } from '../modules/Crud/Components/ListSearchComponent';
import { ModeEnum, Table } from 'generated/graphql';
import { DeleteOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useAppState } from 'context/AppContext';
import { pathParams } from '@helpers';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlesPage: PageComponent = () => {
    const tableName = Table.Article;

    const { permissions } = useAppState();

    let modes: Array<string> = [];
    if (permissions) {
        permissions
            .filter((p: any) => {
                return p.table.toUpperCase() == tableName.toUpperCase();
            })
            .forEach((p: any) => {
                modes.push(p.mode.toUpperCase());
            });
    }

    return (
        <>
            <AppHead title="Bee V2" />
            <ListWithFilter
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
                queryName={'articles'}
                resolverName={'Article'}
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
