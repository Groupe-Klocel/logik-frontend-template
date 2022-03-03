import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

export interface IAddFeatureCodeFormProps {}

export const AddFeatureCodeForm: FC<IAddFeatureCodeFormProps> = ({}: IAddFeatureCodeFormProps) => {
    let { t } = useTranslation('common');

    // TYPED SAFE ALL

    const [newFeatureCodeData, setNewFeatureCodeData] = useState('');

    // Call api to create new group
    const onFinish = (values: any) => {
        alert('Success');
        setNewFeatureCodeData(values);
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
