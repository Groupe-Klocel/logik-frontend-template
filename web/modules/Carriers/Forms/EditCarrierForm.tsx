import { WrapperForm } from '@components';
import { showSuccess, showError, showInfo } from '@helpers';
import { Form, Row, Col, Input, Checkbox, Button } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    useUpdateCarrierMutation,
    UpdateCarrierMutation,
    UpdateCarrierMutationVariables
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

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
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    const [form] = Form.useForm();

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
                        <Form.Item
                            label={available}
                            name="available"
                            valuePropName="checked"
                            initialValue={true}
                        >
                            <Checkbox>{available}</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
