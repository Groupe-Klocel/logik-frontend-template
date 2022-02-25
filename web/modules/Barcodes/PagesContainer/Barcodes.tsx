import { FC, useCallback, useState, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton } from '@components';
import { barcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { BarcodesList } from 'modules/Barcodes/Elements/BarcodesList';
import { Space, Form, Button } from 'antd';
import { BarcodesSearch } from 'components/common/smart/DrawerItems/BarcodesSearch';
import { useDrawerDispatch } from 'context/DrawerContext';
import {showError} from "@helpers"

export interface IBarcodesProps {}

const Barcodes: FC<IBarcodesProps> = ({}: IBarcodesProps) => {
    let { t } = useTranslation();

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
                title={t('common:barcodes')}
                routes={barcodesRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('common:barcode') })}
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

Barcodes.displayName = 'Barcodes';

export { Barcodes };
