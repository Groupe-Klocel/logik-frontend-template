import { useCallback, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton } from '@components';
import { purchaseOrdersSubRoutes } from 'modules/PurchaseOrders/Static/purchaseOrdersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { PurchaseOrderList } from 'modules/PurchaseOrders/Elements/PurchaseOrderList';
import { Space, Form, Button } from 'antd';
import { PurchaseOrderSearch } from 'modules/PurchaseOrders/Forms/PurchaseOrderSearch';
import { useDrawerDispatch } from 'context/DrawerContext';
import { showError } from '@helpers';
import { useAppState } from 'context/AppContext';
import { ModeEnum, Table } from 'generated/graphql';

const PurchaseOrders = () => {
    const { t } = useTranslation();
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.PurchaseOrder;
        })?.mode;

    //	SEARCH DRAWER
    const [search, setSearch] = useState({});
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
                content: <PurchaseOrderSearch form={formSearch} />,
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
                console.log(formSearch.getFieldsValue(true))
                const searchValues = formSearch.getFieldsValue(true);
                const newSearchValues = {
                    ...searchValues,
                   status: parseInt(searchValues.status),
                   type: parseInt(searchValues.type),
                };
                // Here make api call of something else
                setSearch(newSearchValues);
                closeDrawer();
            })
            .catch((err) => showError(t('messages:error-getting-data')));
    };

    const handleExport = () => {
        console.log('call exportPurchaseOrders endpoint and download csv')
    }

    return (
        <>
            <HeaderContent
                title={t('common:purchase-orders')}
                routes={purchaseOrdersSubRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                            <>
                                <LinkButton
                                    title={t('actions:add2', { name: t('common:purchase-order') })}
                                    path="/purchase-orders/add"
                                    type="primary"
                                />
                                <Button
                                    type="primary"
                                    onClick={() => handleExport()}
                                >{t('actions:export', { name: t('common:purchase-order') })}</Button>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </Space>
                }
            />
            <PurchaseOrderList searchCriteria={search} />
        </>
    );
};

PurchaseOrders.displayName = 'PurchaseOrders';

export { PurchaseOrders };
