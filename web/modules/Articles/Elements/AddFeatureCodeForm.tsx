import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export const AddFeatureCodeForm = () => {
    const { t } = useTranslation('common');

    // TYPED SAFE ALL


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

                <Form.Item name="unique">
                    <Checkbox>{t('unique')}</Checkbox>
                </Form.Item>

                <Form.Item name="date-type">
                    <Checkbox>{t('date-type')}</Checkbox>
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
