import { WrapperForm } from '@components';
import { Button, Col, Form, Input, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

export interface IAddGroupFormProps { }

export const AddGroupForm: FC<IAddGroupFormProps> = ({ }: IAddGroupFormProps) => {
    let { t } = useTranslation('common');

    // TYPED SAFE ALL

    const [newGroupData, setNewGroupData] = useState('');

    // Call api to create new group
    const onFinish = (values: any) => {
        alert('Success');
        setNewGroupData(values);
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
