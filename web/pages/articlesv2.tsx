import { AppHead } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

import { ListWithFilter } from '../modules/Crud/ListWithFilter';
import { FilterTypeEnum } from '../modules/Crud/ListSearch';
import { Table } from 'generated/graphql';

type PageComponent = FC & { layout: typeof MainLayout };

const ArticlesPage: PageComponent = () => {
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
                tableName={Table.Article}
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
            />
        </>
    );
};

ArticlesPage.layout = MainLayout;

export default ArticlesPage;
