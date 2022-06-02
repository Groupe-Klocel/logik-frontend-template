import { WrapperForm } from '@components';
import { showSuccess, showError, showInfo } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAuth } from 'context/AuthContext';
import {
    useCreateCarrierMutation,
    CreateCarrierMutation,
    CreateCarrierMutationVariables
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IOption {
    value: string;
    id: string;
}

const { TextArea } = Input;

export const AddCarrierForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const name = t('common:name');
    const available = t('d:available');
    const code = t('common:code');
    const status = t('common:status');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    // TYPED SAFE ALL
    const [form] = Form.useForm();

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

    const onMoveableChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ moveable: e.target.checked });
    };
    const onBulkChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ bulk: e.target.checked });
    };

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
                <Form.Item
                    label={name}
                    name="name"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Input />
                </Form.Item>
                <Col xs={24} xl={12}>
                    <Form.Item label={status} name="status">
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} xl={12}>
                    <Form.Item label={code} name="code">
                        <Input />
                    </Form.Item>
                </Col>
                <Form.Item name="available">
                    <Checkbox onChange={onMoveableChange}>{available}</Checkbox>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
