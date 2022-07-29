import { HeaderContent } from '@components';
import { feedbackOverwritesRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';
import { FeedbackOverwriteList } from 'modules/Feedbacks/Elements/FeedbackOverwriteList';
import { useCallback, useState } from 'react';
import { Button, Form, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDrawerDispatch } from 'context/DrawerContext';
import { showError } from '@helpers';
import { FeedbackOverwritesSearch } from '../Forms/FeedbackOverwriteSearch';

export const FeedbackOverwrites = () => {
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
                content: <FeedbackOverwritesSearch form={formSearch} />,
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
                if (
                    searchValues['movementCode'] == '' ||
                    searchValues['movementCode'] === undefined
                )
                    delete newSearchValues['movementCode'];
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
                title={t('menu:feedbackOverwrite')}
                routes={feedbackOverwritesRoutes}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:add-feedbackOverwrite')}
                            path="/add-feedbackOverwrite"
                            type="primary"
                        />
                        <Button icon={<SearchOutlined />} onClick={() => openSearchDrawer()} />
                    </Space>
                }
            />
            <FeedbackOverwriteList searchCriteria={search} />
        </>
    );
};
