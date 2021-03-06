import { HeaderContent } from '@components';
import { statusFeedbackOverwritesRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { StatusFeedbackOverwritesList } from 'modules/Feedbacks/Elements/StatusFeedbackOverwritesList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { useCallback, useState } from 'react';
import { useDrawerDispatch } from 'context/DrawerContext';
import { Button, Form, Space } from 'antd';
import { showError } from '@helpers';
import { StatusFeedbackOverwritesSearch } from '../Forms/StatusFeedbackOverwritesSearch';
import { SearchOutlined } from '@ant-design/icons';

export const StatusFeedbackOverwrites = () => {
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
                content: <StatusFeedbackOverwritesSearch form={formSearch} />,
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
                    feedback: searchValues['feedback'] == 'true',
                    system: searchValues['system'] == 'true'
                };
                if (searchValues['feedback'] == '' || searchValues['feedback'] === undefined)
                    delete newSearchValues['feedback'];
                if (searchValues['system'] == '' || searchValues['system'] === undefined)
                    delete newSearchValues['system'];
                if (
                    searchValues['stockOwnerId'] == '' ||
                    searchValues['stockOwnerId'] === undefined
                )
                    delete newSearchValues['stockOwnerId'];
                if (searchValues['objetType'] == '' || searchValues['objetType'] === undefined)
                    delete newSearchValues['objetType'];
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
                title={t('menu:status-feedback-overwrites')}
                routes={statusFeedbackOverwritesRoutes}
                actionsRight={
                    <Space>
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                        <LinkButton
                            title={t('actions:add-status-feedback-overwrite', {
                                name: t('menu:status-feedback-overwrites')
                            })}
                            path="/add-status-feedback-overwrites"
                            type="primary"
                        />
                    </Space>
                }
            />
            <StatusFeedbackOverwritesList searchCriteria={search} />
        </>
    );
};
