import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

export interface IAddPackagingFormProps {}

export const AddPackagingForm: FC<IAddPackagingFormProps> = ({}: IAddPackagingFormProps) => {
    let { t } = useTranslation('common');

    // TYPED SAFE ALL

    const [newPackagingData, setNewPackagingData] = useState('');

    // Call api to create new group
    const onFinish = (values: any) => {
        console.log('Success:', values);
        setNewPackagingData(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
                    label={t('name')}
                    name="name"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={t('description')} name="description">
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('length')}
                    name="length"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item
                    label={t('width')}
                    name="width"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item
                    label={t('height')}
                    name="height"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item
                    label={t('empty-weight')}
                    name="empty-weight"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item label={t('closure-weight')} name="closure-weight">
                    <Input type="number" />
                </Form.Item>

                <Form.Item name="default">
                    <Checkbox>{t('default')}</Checkbox>
                </Form.Item>

                <Form.Item name="dispatchable">
                    <Checkbox>{t('dispatchable')}</Checkbox>
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
