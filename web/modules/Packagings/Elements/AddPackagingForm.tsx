import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export const AddPackagingForm = () => {
    const { t } = useTranslation('common');


    // Call api to create new group
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
