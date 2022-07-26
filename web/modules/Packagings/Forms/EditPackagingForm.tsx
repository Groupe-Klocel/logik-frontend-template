import { WrapperForm } from '@components';
import { Button, Input, Form, Checkbox, InputNumber } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdatePackagingMutation,
    UpdatePackagingMutation,
    UpdatePackagingMutationVariables,
    useUpdateDefaultPackagingMutation,
    UpdateDefaultPackagingMutation,
    UpdateDefaultPackagingMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

export type EditPackagingFormProps = {
    packagingId: string;
    details: any;
};

export const EditPackagingForm: FC<EditPackagingFormProps> = ({
    packagingId,
    details
}: EditPackagingFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [defaultValue, setDefaultValue] = useState(details.default);
    const [dispatchableValue, setDispatchableValue] = useState(details.dispatchable);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    //Used when update default == false
    const { mutate, isLoading: updateLoading } = useUpdatePackagingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdatePackagingMutation,
                _variables: UpdatePackagingMutationVariables,
                _context: any
            ) => {
                router.push(`/packaging/${data.updatePackaging?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updatePackaging = ({ id, input }: UpdatePackagingMutationVariables) => {
        mutate({ id, input });
    };

    //Used when update default == true
    const { mutate: defaultUpdate, isLoading: defaultUpdateLoading } =
        useUpdateDefaultPackagingMutation<Error>(graphqlRequestClient, {
            onSuccess: (
                data: UpdateDefaultPackagingMutation,
                _variables: UpdateDefaultPackagingMutationVariables,
                _context: any
            ) => {
                router.push(`/packaging/${data.updatePackaging?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        });

    const updateDefaultPackaging = ({ id, input }: UpdateDefaultPackagingMutationVariables) => {
        defaultUpdate({ id, input });
    };

    // manages checkboxes changes
    const onDefaultChange = (e: CheckboxChangeEvent) => {
        setDefaultValue(!defaultValue);
        form.setFieldsValue({ default: e.target.checked });
    };
    const onDispatchableChange = (e: CheckboxChangeEvent) => {
        setDispatchableValue(!dispatchableValue);
        form.setFieldsValue({ dispatchable: e.target.checked });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['statusText'];
                if (formData.default == true) {
                    updateDefaultPackaging({ id: packagingId, input: formData });
                } else {
                    updatePackaging({ id: packagingId, input: formData });
                }
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
                    <Checkbox checked={defaultValue} onChange={onDefaultChange}>
                        {t('default')}
                    </Checkbox>
                </Form.Item>

                <Form.Item name="dispatchable">
                    <Checkbox checked={dispatchableValue} onChange={onDispatchableChange}>
                        {t('dispatchable')}
                    </Checkbox>
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
