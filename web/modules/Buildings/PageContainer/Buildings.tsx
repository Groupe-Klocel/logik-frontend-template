import { HeaderContent } from '@components';
import { buildingsRoutes } from 'modules/Buildings/Static/routes';
import useTranslation from 'next-translate/useTranslation';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { BuildingList } from 'modules/Buildings/Elements/BuildingsList';
import { useCallback, useState } from 'react';
import { Button, Form, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDrawerDispatch } from 'context/DrawerContext';
import { showError } from '@helpers';
import { BuildingsSearch } from '../Forms/BuildingsSearch';

export const Buildings = () => {
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
                content: <BuildingsSearch form={formSearch} />,
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
                if (searchValues['status'] == '' || searchValues['status'] === undefined)
                    delete newSearchValues['status'];
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
                title={t('menu:buildings')}
                routes={buildingsRoutes}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:add-building')}
                            path="/add-building"
                            type="primary"
                        />
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                    </Space>
                }
            />
            <BuildingList searchCriteria={search} />
        </>
    );
};
