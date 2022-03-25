import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton, ArticlesSearch } from '@components';
import { Space, Form, Button } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ArticlesList } from 'modules/Articles/Elements/ArticlesList';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { showError } from '@helpers';
import { useCallback, useState } from 'react';

function useForceUpdate() {
    let [value, setState] = useState(true);
    return () => setState(!value);
}

const Articles = () => {
    const { t } = useTranslation();

    const [search, setSearch] = useState({});
    const [update, setUpdate] = useState(false);
    const forceUpdate = useForceUpdate();
    console.log(search);
    console.log('update statte', update);
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

    console.log('render');
    return (
        <>
            <HeaderContent
                title={t('common:articles')}
                routes={articlesSubRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('common:article') })}
                            path="/add-article"
                            type="primary"
                        />
                    </Space>
                }
            />
            <ArticlesList searchCriteria={search} forceUpdate={() => setUpdate(!update)} />
        </>
    );
};

Articles.displayName = 'Articles';

export { Articles };
