import { FC, useEffect } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Space } from 'antd';
import { StyledForm, WrapperForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateArticleMutation,
    UpdateArticleMutation,
    UpdateArticleMutationVariables,
    useUpdateBlockMutation,
    UpdateBlockMutation,
    UpdateBlockMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

export type EditBlockFormProps = {
    blockId: string;
    details: any;
};

export const EditBlockForm: FC<EditBlockFormProps> = ({ blockId, details }: EditBlockFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const name = t('common:name');
    const moveable = t('common:moveable');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdateBlockMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdateBlockMutation,
            _variables: UpdateBlockMutationVariables,
            _context: any
        ) => {
            router.push(`/block/${blockId}`);
            showSuccess(t('messages:success-updated'));
        },
        onError: (error) => {
            showError(t('messages:error-update-data'));
        }
    });

    const updateBlock = ({ id, input }: UpdateBlockMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                updateBlock({
                    id: blockId,
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
                            label={moveable}
                            name="moveable"
                            valuePropName="checked"
                            initialValue={true}
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Checkbox>{moveable}</Checkbox>
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
