import { UploadOutlined } from '@ant-design/icons';
import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Descriptions, Divider, Form, Input, InputNumber, Row, Upload } from 'antd';
import {
    CreateStockOwnerMutation,
    CreateStockOwnerMutationVariables,
    useCreateStockOwnerMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import router from 'next/router';
import { useEffect } from 'react';

export const AddStockOwnerForm = () => {
    const { t } = useTranslation();
    const name = t('common:name');
    const accesKey = t('common:access-key');
    const secretKey = t('common:secret-key');
    const exchangeDirectory = t('common:exchange-directory');
    const exchangePrefix = t('common:exchange-prefix');
    const contactName = t('common:contact-name');
    const address1 = t('common:address1');
    const address2 = t('common:address2');
    const address3 = t('common:address3');
    const postalCode = t('common:postalCode');
    const city = t('common:city');
    const country = t('common:country');
    const countryCode = t('common:country-code');
    const phone = t('common:phone');
    const mobile = t('common:mobile');
    const email = t('common:email');
    const logo = t('common:logo');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const submit = t('actions:submit');
    const cancel = t('actions:cancel');

    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateStockOwnerMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateStockOwnerMutation,
                _variables: CreateStockOwnerMutationVariables,
                _context: any
            ) => {
                router.push(`/stock-owner/${data.createStockOwner.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createStockOwner = ({ input }: CreateStockOwnerMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                //delete formData.stockOwnerName;
                createStockOwner({ input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-creating-data'));
            });
    };

    //TODO FETCH GROUP'S NAME
    // TYPED SAFE ALL
    useEffect(() => {
        if (createLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [createLoading]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item
                            label={name}
                            name="name"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={24}>
                        <Form.Item label={logo} name="logoUrl">
                            <Upload>
                                <Button icon={<UploadOutlined />}>Select a Logo</Button>
                            </Upload>
                            <Button type="primary"></Button>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={accesKey} name="awsAccessKeyId">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={secretKey} name="awsSecretAccessKey">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={exchangeDirectory} name="s3ExchangeDir">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={exchangePrefix} name="exchangePrefix">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Divider>Headquarter Address</Divider>
                    <Col xs={24} xl={12}>
                        <Form.Item label={contactName} name="contact">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={address1} name="address1">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={address2} name="address2">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={address3} name="address3">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={4}>
                        <Form.Item label={postalCode} name="postCode">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={8}>
                        <Form.Item label={city} name="city">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={8}>
                        <Form.Item label={country} name="country">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={4}>
                        <Form.Item label={countryCode} name="countryCode">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={6}>
                        <Form.Item label={mobile} name="mobile">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={6}>
                        <Form.Item label={phone} name="phone">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={email} name="email">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Divider>Sender Address</Divider>
                    <Col xs={24} xl={6}>
                        <Form.Item label={name} name="senderName">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={6}>
                        <Form.Item label={contactName} name="senderContact">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={address1} name="senderAddress1">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={address2} name="senderAddress2">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={address3} name="senderAddress3">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={4}>
                        <Form.Item label={postalCode} name="senderPostCode">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={8}>
                        <Form.Item label={city} name="senderCity">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={8}>
                        <Form.Item label={country} name="senderCountry">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={4}>
                        <Form.Item label={countryCode} name="senderCountryCode">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={6}>
                        <Form.Item label={mobile} name="senderMobile">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={6}>
                        <Form.Item label={phone} name="senderPhone">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={email} name="senderEmail">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {submit}
                        </Button>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Button danger onClick={() => router.back()}>
                            {cancel}
                        </Button>
                    </Col>
                </Row>
            </div>
        </WrapperForm>
    );
};
