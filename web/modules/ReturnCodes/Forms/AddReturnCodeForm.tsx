import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    CreateReturnCodeMutation,
    CreateReturnCodeMutationVariables,
    useCreateReturnCodeMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

export const AddReturnCodeForm = () => {
    const { t } = useTranslation();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateReturnCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateReturnCodeMutation,
                _variables: CreateReturnCodeMutationVariables,
                _context: any
            ) => {
                router.push(`/return-code/${data.createReturnCode.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createReturnCode = ({ input }: CreateReturnCodeMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                createReturnCode({ input: formData });
            })
            .catch((err) => {
                showError(t('error-creating-data'));
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
                <Form.Item name="description" label={t('common:description')}>
                    <Input />
                </Form.Item>
                <Form.Item name="type" label={t('common:type')}>
                    <Input />
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
