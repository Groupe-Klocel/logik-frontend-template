import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export const AddBlocForm = () => {
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
                    rules={[{ required: true, message: 'Please input a name !' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="moveable">
                    <Checkbox>{t('moveable')}</Checkbox>
                </Form.Item>

                <Form.Item name="masse">
                    <Checkbox>{t('masse')}</Checkbox>
                </Form.Item>

                <Form.Item
                    label={t('comment')}
                    name="comment"
                    rules={[{ required: true, message: 'Please enter a comment !' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={t('wharehouse-code')} name="wharehouse-code">
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