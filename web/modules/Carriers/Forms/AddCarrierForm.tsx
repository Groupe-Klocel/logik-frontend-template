import { WrapperForm } from '@components';
import { showSuccess, showError, showInfo } from '@helpers';
import { Form, Row, Col, Input, Checkbox, Button, InputNumber } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    useCreateCarrierMutation,
    CreateCarrierMutation,
    CreateCarrierMutationVariables
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface IOption {
    value: string;
    id: string;
}

export const AddCarrierForm = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    // const selectArticle = t('common:article');
    // const selectArticlePlaceholder = t('messages:please-select', { name: t('common:article') });
    const name = t('common:name');
    const available = t('common:available');
    const code = t('common:code');
    const counter = t('common:counter');
    const to_be_loaded = t('common:to_be_loaded');
    const to_be_palletized = t('common:to_be_palletized');
    const use_receipt_number = t('common:use_receipt_number');
    const parent_carrier = t('common:parent_carrier');
    const is_virtual = t('common:is_virtual');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const submit = t('actions:submit');
    const cancel = t('actions:cancel');
    // const articleSelectErrorMessage = `${t('messages:error-message-select-1')} ${t(
    //     'common:article'
    // )}`;

    // END TEXTS TRANSLATION

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const [idOptions, setIdOptions] = useState<Array<IOption>>([]);
    const [aId, setAId] = useState<number>();

    const { mutate, isLoading: createLoading } = useCreateCarrierMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateCarrierMutation,
                _variables: CreateCarrierMutationVariables,
                _context: any
            ) => {
                router.push(`/carrier/${data.createCarrier.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createCarrier = ({ input }: CreateCarrierMutationVariables) => {
        mutate({ input });
    };

    console.log('JND', form.getFieldsValue(true));
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData.carrierName;
                createCarrier({ input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-creating-data'));
            });
    };

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
                    <Col xs={24} xl={12}>
                        <Form.Item
                            label={code}
                            name="code"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item label={counter} name="counter">
                            <InputNumber defaultValue="0" min="0" max="10" step="0.01" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="toBeLoaded" valuePropName="checked" initialValue={false}>
                            <Checkbox>{to_be_loaded}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                            name="toBePalletized"
                            valuePropName="checked"
                            initialValue={false}
                        >
                            <Checkbox>{to_be_palletized}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                            name="useReceiptNumber"
                            valuePropName="checked"
                            initialValue={false}
                        >
                            <Checkbox>{use_receipt_number}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="available" valuePropName="checked" initialValue={false}>
                            <Checkbox>{available}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="isVirtual" valuePropName="checked" initialValue={false}>
                            <Checkbox>{is_virtual}</Checkbox>
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
