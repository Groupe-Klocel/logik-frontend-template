import { WrapperForm } from '@components';
import { Button, Col, Form, InputNumber, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export const AddCompanyForm = () => {
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
