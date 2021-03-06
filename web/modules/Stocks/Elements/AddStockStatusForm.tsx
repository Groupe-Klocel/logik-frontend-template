import { WrapperForm } from '@components';
import { Button, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export const AddStockStatusForm = () => {
    const { t } = useTranslation('common');

    //TODO FETCH GROUP'S NAME
    // TYPED SAFE ALL

    // Call api to create new user
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

                <Form.Item
                    label={t('value')}
                    name="value"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item label={t('comment')} name="comment">
                    <Input />
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
