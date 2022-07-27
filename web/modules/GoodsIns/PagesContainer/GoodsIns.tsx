import { SearchOutlined } from '@ant-design/icons';
import { HeaderContent, LinkButton, GoodsInsSearch } from '@components';
import { Space, Form, Button } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { GoodsInsList } from 'modules/GoodsIns/Elements/GoodsInsList';
import { goodsInsSubRoutes } from 'modules/GoodsIns/Static/goodsInsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { showError } from '@helpers';
import { useCallback, useState } from 'react';
import { useAppState } from 'context/AppContext';
import { ModeEnum, Table } from 'generated/graphql';

const GoodsIns = () => {
    const { t } = useTranslation();
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.GoodsIn;
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
                content: <GoodsInsSearch form={formSearch} />,
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
                title={t('common:goods-ins')}
                routes={goodsInsSubRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                            <LinkButton
                                title={t('actions:add2', { name: t('common:goods-ins') })}
                                path="/add-goods-ins"
                                type="primary"
                            />
                        ) : (
                            <></>
                        )}
                    </Space>
                }
            />
            <GoodsInsList searchCriteria={search} />
        </>
    );
};

GoodsIns.displayName = 'GoodsIns';

export { GoodsIns };
