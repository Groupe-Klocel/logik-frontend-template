import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, InputNumber, Row, Select } from 'antd';
import { companiesData } from 'fake-data/companies';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

const { Option } = Select;


export const AddMovementsConfigForm = ()  => {
    const { t } = useTranslation('common');

    //TODO FETCH GROUP'S NAME
    // TYPED SAFE ALL

    const [newMovementsConfigData, setNewMovementsConfigData] = useState('');

    // Call api to create new user
    const onFinish = (values: any) => {
        alert('Success');
        setNewMovementsConfigData(values);
    };

    const onFinishFailed = (errorInfo: any) => {
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
                // rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}`}]}
                >
                    <Select placeholder={`${t('error-message-select-1')} ${t('company')}`}>
                        {companiesData.map((company: any) => (
                            <Option key={company.id} value={company.name}>
                                {company.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={t('select-movement-code')}
                    name="movement-code"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('error-message-select-1')} ${t('movement-code')}`
                        }
                    ]}
                >
                    <Select placeholder={`${t('error-message-select-1')} ${t('movement-code')}`}>
                        {companiesData.map((group: any) => (
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
