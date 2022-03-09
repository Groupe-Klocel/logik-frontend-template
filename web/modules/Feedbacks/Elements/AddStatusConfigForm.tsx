import { WrapperForm } from '@components';
import { GroupType } from '@helpers';
import { Button, Checkbox, Col, Form, InputNumber, Row, Select } from 'antd';
import { groupsData } from 'fake-data/groups';
import useTranslation from 'next-translate/useTranslation';

const { Option } = Select;

export const AddStatusConfigForm = () => {
    const { t } = useTranslation('common');

    //TODO FETCH GROUP'S NAME
    // TYPED SAFE ALL


    const onFinish = () => {
        alert('Success');
    };

    const onFinishFailed = () => {
        alert('Failed');
    };

    return (
        <WrapperForm>
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                scrollToFirstError
            >
                <Form.Item
                    label={t('select-company')}
                    name="company"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('error-message-select-1')} ${t('company')}`
                        }
                    ]}
                >
                    <Select placeholder={`${t('error-message-select-1')} ${t('company')}`}>
                        {groupsData.map((group: GroupType) => (
                            <Option key={group.id} value={group.name}>
                                {group.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={t('select-object-type')}
                    name="object-type"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('error-message-select-1')} ${t('object-type')}`
                        }
                    ]}
                >
                    <Select placeholder={`${t('error-message-select-1')} ${t('object-type')}`}>
                        {groupsData.map((group: GroupType) => (
                            <Option key={group.id} value={group.name}>
                                {group.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={t('select-status-code')}
                    name="status-code"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('error-message-select-1')} ${t('status-code')}`
                        }
                    ]}
                >
                    <Select placeholder={`${t('error-message-select-1')} ${t('status-code')}`}>
                        {groupsData.map((group: GroupType) => (
                            <Option key={group.id} value={group.name}>
                                {group.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item name="feedback">
                    <Checkbox>{t('feedback')}</Checkbox>
                </Form.Item>

                <Form.Item label={t('custom-value')} name="custom-value">
                    <InputNumber />
                </Form.Item>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            {t('submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
