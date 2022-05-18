import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, KeyboardEventHandler, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';
import {
    useCreateBlockMutation,
    CreateBlockMutation,
    CreateBlockMutationVariables,
    useUpdateBlockMutation,
    UpdateBlockMutation,
    UpdateBlockMutationVariables
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
    useArticleIds,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_ITEMS_PER_PAGE,
    PaginationType
} from '@helpers';
import internal from 'stream';

export type EditBlockFormProps = {
    blockId: string;
    details: any;
};

export const EditBlockForm: FC<EditBlockFormProps> = ({ blockId, details }: EditBlockFormProps) => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const name = t('common:name');
    const moveable = t('d:moveable');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: updateLoading } = useUpdateBlockMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateBlockMutation,
                _variables: UpdateBlockMutationVariables,
                _context: any
            ) => {
                router.push(`/block/${blockId}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateBlock = ({ id, input }: UpdateBlockMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                updateBlock({ id: blockId, input: form.getFieldsValue(true) });
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
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-create-wip'));
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

                        <Form.Item
                            label={moveable}
                            initialValue={false}
                            name="moveable"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Checkbox>{moveable}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}></Col>
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
