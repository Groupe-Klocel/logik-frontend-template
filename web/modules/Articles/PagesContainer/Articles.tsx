import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton, ArticlesSearch } from '@components';
import { Space, Form, Button } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ArticlesList } from 'modules/Articles/Elements/ArticlesList';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { showError } from '@helpers';
import { useCallback, useState } from 'react';
import { useAppState } from 'context/AppContext';

const Articles = () => {
    const { t } = useTranslation();
    const { user } = useAppState();
    const permissions = user?.role.permissions;
    const mode = permissions.find((p: any) => {
        return p.table == 'ARTICLE';
    }).mode;
    // console.log('mode', mode);

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
                content: <ArticlesSearch form={formSearch} />,
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
                        {mode == 'WRITE' ? (
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
            <ArticlesList searchCriteria={search} />
        </>
    );
};

Articles.displayName = 'Articles';

export { Articles };
