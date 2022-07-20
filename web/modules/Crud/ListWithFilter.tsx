import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton } from '@components';
import { Space, Form, Button } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ListComponent } from 'modules/Crud/ListComponent';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { showError } from '@helpers';
import { useCallback, useState } from 'react';
import { useAppState } from 'context/AppContext';
import { ModeEnum } from 'generated/graphql';
import { ListSearch, SearchFilter } from './ListSearch';

export interface IListProps {
    useColumns?: Array<string>;
    sortableColumns?: Array<string>;
    filterColumns?: Array<SearchFilter>;
    queryName: string;
    resolverName: string;
    tableName: string;
}

const ListWithFilter = (props: IListProps) => {
    const defaultProps = {
        useColumns: [],
        sortableColumns: [],
        filterColumns: []
    };
    props = { ...defaultProps, ...props };

    const { t } = useTranslation();
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == props.tableName.toUpperCase();
        })?.mode;
    console.log('mode', mode);

    const [search, setSearch] = useState({});
    console.log(search);
    //	SEARCH DRAWER
    const [formSearch] = Form.useForm();

    const dispatchDrawer = useDrawerDispatch();

    const openSearchDrawer = useCallback(
        () =>
            dispatchDrawer({
                size: 450,
                type: 'OPEN_DRAWER',
                title: 'actions:search',
                comfirmButtonTitle: 'actions:search',
                comfirmButton: true,
                cancelButtonTitle: 'actions:reset',
                cancelButton: true,
                submit: true,
                content: <ListSearch form={formSearch} columns={props.filterColumns!} />,
                onCancel: () => handleReset(),
                onComfirm: () => handleSubmit()
            }),
        [dispatchDrawer]
    );

    const closeDrawer = useCallback(
        () => dispatchDrawer({ type: 'CLOSE_DRAWER' }),
        [dispatchDrawer]
    );

    const handleReset = () => {
        formSearch.resetFields();
    };

    const handleSubmit = () => {
        formSearch
            .validateFields()
            .then(() => {
                // Here make api call of something else
                setSearch(formSearch.getFieldsValue(true));
                closeDrawer();
            })
            .catch((err) => showError(t('messages:error-getting-data')));
    };

    return (
        <>
            <HeaderContent
                title={t('common:articles')}
                routes={articlesSubRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                            <LinkButton
                                title={t('actions:add2', { name: t('common:article') })}
                                path="/add-article"
                                type="primary"
                            />
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            />
            <ListComponent
                searchCriteria={search}
                useColumns={props.useColumns!}
                sortableColumns={props.sortableColumns!}
                queryName={props.queryName}
                resolverName={props.resolverName}
                table={props.tableName}
            />
        </>
    );
};

ListWithFilter.displayName = 'ListWithFilter';
export { ListWithFilter };
