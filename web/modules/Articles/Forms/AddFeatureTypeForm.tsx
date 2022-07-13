import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, InputNumber, Row, Typography } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    CreateFeatureTypeMutation,
    CreateFeatureTypeMutationVariables,
    useCreateFeatureTypeMutation
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const { Title } = Typography;

export const AddFeatureTypeForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateFeatureTypeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateFeatureTypeMutation,
                _variables: CreateFeatureTypeMutationVariables,
                _context: any
            ) => {
                router.push(`/feature-type/${data.createParameter.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createFeatureType = ({ input }: CreateFeatureTypeMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                const translation = { en: formData.en, fr: formData.fr };
                formData['translation'] = translation;
                formData['scope'] = 'feature_type';
                formData.code = String(formData.code);
                delete formData['en'];
                delete formData['fr'];
                console.log(formData);
                createFeatureType({ input: formData });
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
                    label={t('code')}
                    name="code"
                    initialValue={71400}
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input min={71400} max={71499} />
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
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {t('actions:submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
