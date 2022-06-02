import { HeaderContent } from '@components';
import { returnCodesRoutes } from 'modules/ReturnCodes/Static/returnCodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { ReturnCodesList } from 'modules/ReturnCodes/Elements/ReturnCodesList';
import { Button, Form, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ReturnCodesSearch } from '../Forms/ReturnCodesSearch';
import { showError } from '@helpers';

export const ReturnCodes = () => {
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
                content: <ReturnCodesSearch form={formSearch} />,
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
                setSearch(formSearch.getFieldsValue(true));
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
                title={t('menu:return-codes')}
                routes={returnCodesRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                    </Space>
                }
            />
            <ReturnCodesList searchCriteria={search} />
        </>
    );
};
