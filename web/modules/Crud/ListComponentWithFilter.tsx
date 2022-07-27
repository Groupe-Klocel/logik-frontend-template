import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent } from '@components';
import { Space, Form, Button } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ListTableComponent } from 'modules/Crud/submodules/ListTableComponent';
import useTranslation from 'next-translate/useTranslation';
import { showError } from '@helpers';
import { useCallback, useState } from 'react';
import { ListSearchComponent } from './submodules/ListSearchComponent';
import { ModelType } from 'models/Models';

export type HeaderData = {
    title: string;
    routes: Array<any>;
    actionsComponent: any;
};
export interface IListProps {
    dataModel: ModelType;
    actionColumns?: any;
    headerData: HeaderData;
}

const ListComponentWithFilter = (props: IListProps) => {
    const defaultProps = {
        actionColumns: []
    };
    props = { ...defaultProps, ...props };

    const { t } = useTranslation();

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
                content: (
                    <ListSearchComponent
                        form={formSearch}
                        columns={props.dataModel.filterColumns}
                    />
                ),
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
                title={props.headerData.title}
                routes={props.headerData.routes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        {props.headerData.actionsComponent != null ? (
                            props.headerData.actionsComponent
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            />
            <ListTableComponent
                searchCriteria={search}
                actionColumns={props.actionColumns}
                dataModel={props.dataModel}
            />
        </>
    );
};

ListComponentWithFilter.displayName = 'ListWithFilter';
export { ListComponentWithFilter };
