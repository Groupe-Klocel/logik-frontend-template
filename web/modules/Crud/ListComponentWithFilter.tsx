import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton } from '@components';
import { Space, Form, Button } from 'antd';
import { DeleteOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ListTableComponent } from 'modules/Crud/submodules/ListTableComponent';
import useTranslation from 'next-translate/useTranslation';
import { getModesFromPermissions, showError, showInfo, showSuccess, useDelete } from '@helpers';
import { useCallback, useEffect, useState } from 'react';
import { ListSearchComponent } from './submodules/ListSearchComponent';
import { ModelType } from 'models/Models';
import { useAppState } from 'context/AppContext';
import { ModeEnum } from 'generated/graphql';

export type HeaderData = {
    title: string;
    routes: Array<any>;
    actionsComponent: any;
};
export interface IListProps {
    dataModel: ModelType;
    actionColumns?: any;
    headerData: HeaderData;
    routeDetailPage: string;
}

const ListComponentWithFilter = (props: IListProps) => {
    const { permissions } = useAppState();
    const modes = getModesFromPermissions(permissions, props.dataModel.tableName);

    const defaultProps = {
        actionColumns: [
            {
                title: 'actions:actions',
                key: 'actions',
                render: (record: { id: string }) => (
                    <Space>
                        <LinkButton
                            icon={<EyeTwoTone />}
                            path={props.routeDetailPage.replace(':id', record.id)}
                        />
                        {modes.length > 0 && modes.includes(ModeEnum.Write) ? (
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                onClick={() => callDelete(record.id)}
                            />
                        ) : (
                            <></>
                        )}
                    </Space>
                )
            }
        ]
    };
    props = { ...defaultProps, ...props };

    const { t } = useTranslation();

    const {
        isLoading: deleteLoading,
        result: deleteResult,
        mutate: callDelete
    } = useDelete(props.dataModel.queryNames.delete);

    useEffect(() => {
        if (deleteLoading) {
            showInfo(t('messages:info-delete-wip'));
        }
    }, [deleteLoading]);

    useEffect(() => {
        if (!(deleteResult && deleteResult.data)) return;

        if (deleteResult.success) {
            showSuccess(t('messages:success-deleted'));
            setUpdatedKey(Date.now());
        } else {
            showError(t('messages:error-deleting-data'));
        }
    }, [deleteResult]);

    const [updatedKey, setUpdatedKey] = useState<any>(Date.now());
    const [search, setSearch] = useState({});

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
                key={updatedKey}
                searchCriteria={search}
                actionColumns={props.actionColumns}
                dataModel={props.dataModel}
            />
        </>
    );
};

ListComponentWithFilter.displayName = 'ListWithFilter';
export { ListComponentWithFilter };
