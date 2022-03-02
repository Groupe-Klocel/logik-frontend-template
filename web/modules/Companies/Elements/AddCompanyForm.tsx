import { WrapperForm } from '@components';
import { Button, Col, Form, InputNumber, Row, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const { Option } = Select;

export interface IAddCompanyFormProps {}

export const AddCompanyForm: FC<IAddCompanyFormProps> = ({}: IAddCompanyFormProps) => {
    let { t } = useTranslation('common');

    //TODO FETCH GROUP'S NAME
    // TYPED SAFE ALL

    const [newCompanyData, setNewCompanyData] = useState('');

    // Call api to create new user
    const onFinish = (values: any) => {
        alert('Success');
        setNewCompanyData(values);
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
