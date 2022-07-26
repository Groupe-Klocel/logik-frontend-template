import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton, } from '@components';
import { Space, Form, Button } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { patternPathsSubRoutes } from 'modules/PatternPaths/Static/patternPathRoutes';
import useTranslation from 'next-translate/useTranslation';
import { showError } from '@helpers';
import { useCallback, useState } from 'react';
import { useAppState } from 'context/AppContext';
import { ModeEnum, Table } from 'generated/graphql';
import { PatternPathsList } from '../Elements/PatternPathsList';
import { PatternPathsSearch } from '../Forms/PatternPathSearch';

const PatternPaths = () => {
    const { t } = useTranslation();
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.Pattern;
        })?.mode;

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
                content: <PatternPathsSearch form={formSearch} />,
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
                title={t('common:patternPaths')}
                routes={patternPathsSubRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                            <LinkButton
                                title={t('actions:add2', { name: t('common:patternPath') })}
                                path="/pattern-paths/add"
                                type="primary"
                            />
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            />
            <PatternPathsList searchCriteria={search} />
        </>
    );
};

PatternPaths.displayName = 'PatternPaths';

export { PatternPaths };
