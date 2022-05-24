import { HeaderContent } from '@components';
import { cartographyRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import useTranslation from 'next-translate/useTranslation';
import { BlocksList } from 'modules/Cartography/Elements/BlocksList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { useCallback, useState } from 'react';
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDrawerDispatch } from 'context/DrawerContext';
import { Form } from 'antd';
import { showError } from '@helpers';
import { BlocksSearch } from '../Forms/BlocksSearch';

export const Blocks = () => {
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
                content: <BlocksSearch form={formSearch} />,
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
                let temp = formSearch.getFieldsValue(true);
                temp = {
                    ...temp,
                    moveable: temp['moveable'] == 'true',
                    bulk: temp['bulk'] == 'true'
                };
                if (temp['moveable'] == '') delete temp['moveable'];
                if (temp['bulk'] == '') delete temp['bulk'];
                setSearch(temp);
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
                title={t('menu:blocks')}
                routes={cartographyRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('menu:block') })}
                            path="/add-block"
                            type="primary"
                        />
                    </Space>
                }
            />
            <BlocksList searchCriteria={search} />
        </>
    );
};
