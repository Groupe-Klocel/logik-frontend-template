import { WrapperForm } from '@components';
import { Button, Input, Form, Select, Typography, InputNumber } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateParameterMutation,
    UpdateParameterMutation,
    UpdateParameterMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

const { Title } = Typography;

export type EditFeatureTypeFormProps = {
    featureTypeId: string;
    details: any;
};

export const EditFeatureTypeForm: FC<EditFeatureTypeFormProps> = ({
    featureTypeId,
    details
}: EditFeatureTypeFormProps) => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: updateLoading } = useUpdateParameterMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateParameterMutation,
                _variables: UpdateParameterMutationVariables,
                _context: any
            ) => {
                router.push(`/feature-type/${data.updateParameter?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateFeatureType = ({ id, input }: UpdateParameterMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                const translation = { en: formData.en, fr: formData.fr };
                formData['translation'] = translation;
                formData.code = String(formData.code);
                delete formData['en'];
                delete formData['fr'];
                delete formData['system'];
                updateFeatureType({ id: featureTypeId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            ...details.translation
        };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['createdBy'];
        delete tmp_details['modified'];
        delete tmp_details['modifiedBy'];
        delete tmp_details['translation'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [updateLoading]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('code')}
                    name="code"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <InputNumber min={71400} max={71499} />
                </Form.Item>
                <Form.Item
                    label={t('value')}
                    name="value"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Title level={5}>{t('common:translation')}</Title>
                <Form.Item label={t('UK')} name="en">
                    <Input />
                </Form.Item>
                <Form.Item label={t('FR')} name="fr">
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
