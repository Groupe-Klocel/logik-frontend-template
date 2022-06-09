import { WrapperForm } from '@components';
import { showSuccess, showError, showInfo } from '@helpers';
import { Form, Row, Col, Input, Checkbox, Button, InputNumber } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAuth } from 'context/AuthContext';
import {
    useUpdateCarrierMutation,
    UpdateCarrierMutation,
    UpdateCarrierMutationVariables
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

export type EditCarrierFormProps = {
    carrierId: string;
    details: any;
};

export const EditCarrierForm: FC<EditCarrierFormProps> = ({
    carrierId,
    details
}: EditCarrierFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const name = t('common:name');
    const available = t('common:available');
    const code = t('common:code');
    const counter = t('common:counter');
    const to_be_loaded = t('common:to_be_loaded');
    const to_be_palletized = t('common:to_be_palletized');
    const use_receipt_number = t('common:use_receipt_number');
    const parent_carrier = t('common:parent_carrier');
    const is_virtual = t('common:is_virtual');
    const submit = t('actions:submit');
    const cancel = t('actions:cancel');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    const [form] = Form.useForm();
    const [toBeLoadedValue, setToBeLoadedValue] = useState(details.toBeLoaded);
    const [toBePalletizedValue, setToBePalletizedValue] = useState(details.toBePalletized);
    const [useReceiptNumberValue, setUseReceiptNumberValue] = useState(details.useReceiptNumber);
    const [isVirtualValue, setIsVirtualValue] = useState(details.isVirtual);
    const [availableValue, setAvailableValue] = useState(details.available);

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdateCarrierMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdateCarrierMutation,
            _variables: UpdateCarrierMutationVariables,
            _context: any
        ) => {
            router.push(`/carrier/${carrierId}`);
            showSuccess(t('messages:success-updated'));
        },
        onError: (error) => {
            showError(t('messages:error-update-data'));
        }
    });

    const updateCarrier = ({ id, input }: UpdateCarrierMutationVariables) => {
        mutate({ id, input });
    };

    const onToBeLoadedChange = (e: CheckboxChangeEvent) => {
        setToBeLoadedValue(!toBeLoadedValue);
        form.setFieldsValue({ toBeLoaded: e.target.checked });
    };
    const onToBePalletizedChange = (e: CheckboxChangeEvent) => {
        setToBePalletizedValue(!toBePalletizedValue);
        form.setFieldsValue({ toBePalletized: e.target.checked });
    };
    const onUseReceiptNumberChange = (e: CheckboxChangeEvent) => {
        setUseReceiptNumberValue(!useReceiptNumberValue);
        form.setFieldsValue({ useReceiptNumber: e.target.checked });
    };
    const onIsVirtualChange = (e: CheckboxChangeEvent) => {
        setIsVirtualValue(!isVirtualValue);
        form.setFieldsValue({ isVirtual: e.target.checked });
    };
    const onAvailableChange = (e: CheckboxChangeEvent) => {
        setAvailableValue(!availableValue);
        form.setFieldsValue({ available: e.target.checked });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                updateCarrier({
                    id: carrierId,
                    input: form.getFieldsValue(true)
                });
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['createdBy'];
        delete tmp_details['modified'];
        delete tmp_details['modifiedBy'];

        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

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
                        <Checkbox checked={toBeLoadedValue} onChange={onToBeLoadedChange}>
                            {to_be_loaded}
                        </Checkbox>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Checkbox checked={toBePalletizedValue} onChange={onToBePalletizedChange}>
                            {to_be_palletized}
                        </Checkbox>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Checkbox
                            checked={useReceiptNumberValue}
                            onChange={onUseReceiptNumberChange}
                        >
                            {use_receipt_number}
                        </Checkbox>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Checkbox checked={availableValue} onChange={onAvailableChange}>
                            {available}
                        </Checkbox>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Checkbox checked={isVirtualValue} onChange={onIsVirtualChange}>
                            {is_virtual}
                        </Checkbox>
                    </Col>
                </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Button type="primary" loading={updateLoading} onClick={onFinish}>
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
