import { WrapperForm } from '@components';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { blocsData } from 'fake-data/blocs';
import useTranslation from 'next-translate/useTranslation';

const { Option } = Select;

export const AddLocationForm = () => {
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
                    label={t('select-bloc')}
                    name="select-bloc"
                    hasFeedback
                    rules={[
                        { required: true, message: `${t('error-message-select-1')} ${t('bloc')}` }
                    ]}
                >
                    <Select placeholder={`${t('error-message-select-1')} ${t('bloc')}`}>
                        {blocsData.map((bloc: any) => (
                            <Option key={bloc.id} value={bloc.name}>
                                {bloc.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={t('aisle')}
                    name="aisle"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('nb-aisle')}
                    name="nb-aisle"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('column')}
                    name="column"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('nb-column')}
                    name="nb-column"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('level')}
                    name="level"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('nb-level')}
                    name="nb-level"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('step')}
                    name="step"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('position')}
                    name="position"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('nb-position')}
                    name="nb-position"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="replenish">
                    <Checkbox>{t('replenish')}</Checkbox>
                </Form.Item>

                <Form.Item label={t('constraint')} name="constraint">
                    <Input />
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
