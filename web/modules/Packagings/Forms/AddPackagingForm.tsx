import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    CreatePackagingMutation,
    CreatePackagingMutationVariables,
    useCreatePackagingMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const AddPackagingForm = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreatePackagingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreatePackagingMutation,
                _variables: CreatePackagingMutationVariables,
                _context: any
            ) => {
                router.push(`/packaging/${data.createPackaging.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createPackaging = ({ input }: CreatePackagingMutationVariables) => {
        mutate({ input });
    };

    const onDefaultChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ default: e.target.checked });
    };
    const onDispatchableChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ dispatchable: e.target.checked });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                console.log('zzz', formData);
                formData['status'] = 450;
                createPackaging({ input: formData });
            })
            .catch((err) => {
                console.log('yoyo', err);
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
                    label={t('common:name')}
                    name="name"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label={t('common:description')} name="description">
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('common:length')}
                    name="length"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('common:width')}
                    name="width"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('common:height')}
                    name="height"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('d:emptyWeight')}
                    name="weight"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item label={t('d:closureWeight')} name="closureWeight">
                    <InputNumber />
                </Form.Item>

                <Form.Item name="default">
                    <Checkbox onChange={onDefaultChange}>{t('default')}</Checkbox>
                </Form.Item>

                <Form.Item name="dispatchable">
                    <Checkbox onChange={onDispatchableChange}>{t('dispatchable')}</Checkbox>
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
