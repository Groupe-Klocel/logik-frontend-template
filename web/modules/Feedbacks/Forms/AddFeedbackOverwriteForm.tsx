import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    CreateFeedbackOverwriteMutation,
    CreateFeedbackOverwriteMutationVariables,
    GetFeedbackOverwriteMovementCodeParamsQuery,
    SimpleGetAllStockOwnersQuery,
    useCreateFeedbackOverwriteMutation,
    useGetFeedbackOverwriteMovementCodeParamsQuery,
    useSimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddFeedbackOverwriteForm = () => {
    const { t } = useTranslation();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [stockOwners, setStockOwners] = useState<any>();
    const [movementCodes, setMovementCodes] = useState<any>();

    //To render Simple builgings list
    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    //To render movement codes from parameter table for the given scope
    const movementCodesList = useGetFeedbackOverwriteMovementCodeParamsQuery<
        Partial<GetFeedbackOverwriteMovementCodeParamsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (movementCodesList) {
            setMovementCodes(movementCodesList?.data?.listParametersForAScope);
        }
    }, [movementCodesList]);

    const { mutate, isLoading: createLoading } = useCreateFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateFeedbackOverwriteMutation,
                _variables: CreateFeedbackOverwriteMutationVariables,
                _context: any
            ) => {
                router.push(`/feedback-overwrites`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createFeedbackOverwrite = ({ input }: CreateFeedbackOverwriteMutationVariables) => {
        mutate({ input });
    };

    const onFeedbackChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ feedback: e.target.checked });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                createFeedbackOverwrite({ input: formData });
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
                    label={t('common:stockOwner')}
                    name="stockOwnerId"
                    hasFeedback
                    // rules={[{ required: true, message: `${t('error-message-select-1')} ${t('company')}`}]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:stock-owner')
                        })}`}
                    >
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={t('common:movement-code')}
                    name="movementCode"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-empty-input')}`
                        }
                    ]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:movement-code')
                        })}`}
                    >
                        {movementCodes?.map((code: any) => (
                            <Option key={code.id} value={parseInt(code.code)}>
                                {code.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item name="feedback">
                    <Checkbox onChange={onFeedbackChange}>{t('common:feedback')}</Checkbox>
                </Form.Item>

                <Form.Item label={t('common:custom-value')} name="custom-value">
                    <InputNumber />
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
