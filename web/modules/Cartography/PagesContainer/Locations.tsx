import { HeaderContent } from '@components';
import { cartographyRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import useTranslation from 'next-translate/useTranslation';
import { LocationsList } from 'modules/Cartography/Elements/LocationsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { useCallback, useState } from 'react';
import { Button, Form, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDrawerDispatch } from 'context/DrawerContext';
import { showError } from '@helpers';
import { LocationsSearch } from '../Forms/LocationsSearch';

export const Locations = () => {
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
                content: <LocationsSearch form={formSearch} />,
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
                    replenish: searchValues['replenish'] == 'true'
                };
                if (searchValues['replenish'] == '' || searchValues['replenish'] === undefined)
                    delete newSearchValues['replenish'];
                if (searchValues['blockId'] == '' || searchValues['blockId'] === undefined)
                    delete newSearchValues['blockId'];
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
                title={t('menu:locations')}
                routes={cartographyRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add2', { name: t('menu:location') })}
                            path="/add-location"
                            type="primary"
                        />
                    </Space>
                }
            />
            <LocationsList searchCriteria={search} />
        </>
    );
};
