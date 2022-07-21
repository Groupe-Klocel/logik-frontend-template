import { HeaderContent } from '@components';
import { setsRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { SetsList } from 'modules/Articles/Elements/SetsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { useCallback, useState } from 'react';
import { Button, Form, Space } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { showError } from '@helpers';
import { SetsSearch } from '../Forms/SetsSearch';
import { SearchOutlined } from '@ant-design/icons';

export const Sets = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState({});
    const [formSearch] = Form.useForm();

    const dispatchDrawer = useDrawerDispatch();

    const openSearchDrawer = useCallback(
        () =>
            dispatchDrawer({
                type: 'OPEN_DRAWER',
                title: 'actions:search',
                comfirmButtonTitle: 'actions:search',
                comfirmButton: true,
                cancelButtonTitle: 'actions:reset',
                cancelButton: true,
                submit: true,
                content: <SetsSearch form={formSearch} />,
                onCancel: () => handleReset(),
                onComfirm: () => handleSubmit()
            }),
        [dispatchDrawer]
    );

    const closeDrawer = useCallback(
        () => dispatchDrawer({ type: 'CLOSE_DRAWER' }),
        [dispatchDrawer]
    );

    const handleSubmit = () => {
        formSearch
            .validateFields()
            .then(() => {
                const searchValues = formSearch.getFieldsValue(true);
                const newSearchValues = {
                    ...searchValues
                };
                if (
                    searchValues['stockOwnerId'] == '' ||
                    searchValues['stockOwnerId'] === undefined
                )
                    delete newSearchValues['stockOwnerId'];
                if (searchValues['articleId'] == '' || searchValues['articleId'] === undefined)
                    delete newSearchValues['articleId'];
                setSearch(newSearchValues);
                closeDrawer();
            })
            .catch((err) => showError(t('messages:error-getting-data')));
    };

    const handleReset = () => {
        formSearch.resetFields();
    };

    return (
        <>
            <HeaderContent
                title={t('menu:sets')}
                routes={setsRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('menu:article-set') })}
                            path="/add-set"
                            type="primary"
                        />
                    </Space>
                }
            />
            <SetsList searchCriteria={search} />
        </>
    );
};
