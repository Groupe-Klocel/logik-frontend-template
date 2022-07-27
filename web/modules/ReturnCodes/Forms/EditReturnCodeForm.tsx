import { WrapperForm } from '@components';
import { Button, Input, Form, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateReturnCodeMutation,
    UpdateReturnCodeMutation,
    UpdateReturnCodeMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

export type EditReturnCodeFormProps = {
    returnCodeId: string;
    details: any;
};

export const EditReturnCodeForm: FC<EditReturnCodeFormProps> = ({
    returnCodeId,
    details
}: EditReturnCodeFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: updateLoading } = useUpdateReturnCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateReturnCodeMutation,
                _variables: UpdateReturnCodeMutationVariables,
                _context: any
            ) => {
                router.push(`/return-code/${data.updateReturnCode?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateReturnCode = ({ id, input }: UpdateReturnCodeMutationVariables) => {
        mutate({ id, input });
    };

    // to validate empty field when replenish is false
    useEffect(() => {
        form.validateFields(['replenishType']);
    }, [form]);

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                updateReturnCode({ id: returnCodeId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['createdBy'];
        delete tmp_details['modified'];
        delete tmp_details['modifiedBy'];
        delete tmp_details['block'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [updateLoading]);

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
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
