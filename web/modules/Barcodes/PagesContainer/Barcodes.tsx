import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton } from '@components';
import { showError } from '@helpers';
import { Button, Form, Space } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useState } from 'react';
import { BarcodesList } from '../Elements/BarcodesList';
import { BarcodesSearch } from '../Forms/BarcodesSearch';
import { barcodesRoutes } from '../Static/barcodesRoutes';

export const Barcodes = () => {
    const { t } = useTranslation();
    //	SEARCH DRAWER
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
                content: <BarcodesSearch form={formSearch} />,
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
                // Here make api call of something else
                const searchValues = formSearch.getFieldsValue(true);

                console.log('Mes infos de bases : ', searchValues);

                if (
                    searchValues['stockOwnerId'] == '' ||
                    searchValues['stockOwnerId'] === undefined
                )
                    delete searchValues['stockOwnerId'];
                setSearch(searchValues);
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
                title={t('menu:barcodes')}
                routes={barcodesRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('menu:barcode') })}
                            path="/add-barcode"
                            type="primary"
                        />
                    </Space>
                }
            />
            <BarcodesList searchCriteria={search} />
        </>
    );
};
