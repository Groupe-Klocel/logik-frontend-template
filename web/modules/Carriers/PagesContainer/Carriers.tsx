import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton } from '@components';
import { showError } from '@helpers';
import { Button, Form, Space } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useState } from 'react';
import { CarriersList } from '../Elements/CarriersList';
import { CarriersSearch } from '../Forms/CarriersSearch';
import { carriersRoutes } from '../Static/carriersRoutes';

export const Carriers = () => {
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
                content: <CarriersSearch form={formSearch} />,
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
                    ...searchValues,
                    status: parseInt(searchValues['status']),
                    available: searchValues['available'] == 'true',
                    toBeLoaded: searchValues['toBeLoaded'] == 'true',
                    toBePalletized: searchValues['toBePalletized'] == 'true',
                    useReceiptNumber: searchValues['useReceiptNumber'] == 'true',
                    isVirtual: searchValues['isVirtual'] == 'true'
                };
                if (searchValues['status'] == '' || searchValues['status'] === undefined)
                    delete newSearchValues['status'];
                if (searchValues['available'] == '' || searchValues['available'] === undefined)
                    delete newSearchValues['available'];
                if (searchValues['toBeLoaded'] == '' || searchValues['toBeLoaded'] === undefined)
                    delete newSearchValues['toBeLoaded'];
                if (
                    searchValues['toBePalletized'] == '' ||
                    searchValues['toBePalletized'] === undefined
                )
                    delete newSearchValues['toBePalletized'];
                if (
                    searchValues['useReceiptNumber'] == '' ||
                    searchValues['useReceiptNumber'] === undefined
                )
                    delete newSearchValues['useReceiptNumber'];
                if (searchValues['isVirtual'] == '' || searchValues['isVirtual'] === undefined)
                    delete newSearchValues['isVirtual'];
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
                title={t('menu:carriers')}
                routes={carriersRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('menu:carrier') })}
                            path="/add-carrier"
                            type="primary"
                        />
                    </Space>
                }
            />
            <CarriersList searchCriteria={search} />
        </>
    );
};
