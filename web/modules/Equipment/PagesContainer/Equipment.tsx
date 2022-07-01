import { HeaderContent, LinkButton } from '@components';
import { equipmentRoutes } from 'modules/Equipment/Static/EquipementRoutes';
import useTranslation from 'next-translate/useTranslation';
import { EquipmentList } from 'modules/Equipment/Elements/EquipmentList';
import { useCallback, useState } from 'react';
import { Button, Form, Space } from 'antd';
import { useDrawerDispatch } from 'context/DrawerContext';
import { showError } from '@helpers';
import { SearchOutlined } from '@ant-design/icons';
import { EquipmentSearch } from '../Form/EquipmentSearch';

export const Equipment = () => {
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
                content: <EquipmentSearch form={formSearch} />,
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
                    moveable: searchValues['moveable'] == 'true',
                    bulk: searchValues['bulk'] == 'true',
                    level: parseInt(searchValues['level'])
                };
                if (searchValues['moveable'] == '' || searchValues['moveable'] === undefined)
                    delete newSearchValues['moveable'];
                if (searchValues['bulk'] == '' || searchValues['bulk'] === undefined)
                    delete newSearchValues['bulk'];
                if (searchValues['buildingId'] == '' || searchValues['buildingId'] === undefined)
                    delete newSearchValues['buildingId'];
                if (searchValues['level'] == '' || searchValues['level'] === undefined)
                    delete newSearchValues['level'];
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
                title={t('menu:equipment')}
                routes={equipmentRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('menu:equipment-piece') })}
                            path="/add-equipement-piece"
                            type="primary"
                        />
                    </Space>
                }
            />
            <EquipmentList searchCriteria={search} />
        </>
    );
};
