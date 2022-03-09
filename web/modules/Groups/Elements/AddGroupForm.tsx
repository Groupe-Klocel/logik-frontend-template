import { WrapperForm } from '@components';
import { Button, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export const AddGroupForm = () => {
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
                    rules={[
                        {
                            required: true,
                            message: t('messages:please-enter-a', { name: t('common:name') })
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            {t('actions:submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
