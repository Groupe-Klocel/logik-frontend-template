import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    CreateStatusFeedbackOverwriteMutation,
    CreateStatusFeedbackOverwriteMutationVariables,
    GetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    GetStatusFeedbackOverwriteStatusConfigsQuery,
    SimpleGetAllStockOwnersQuery,
    useCreateStatusFeedbackOverwriteMutation,
    useGetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    useGetStatusFeedbackOverwriteStatusConfigsQuery,
    useSimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddStatusFeedbackOverwritesForm = () => {
    const { t } = useTranslation('common');
    const [statusFeedbackOverwriteStatus, setStatusFeedbackOverwriteStatus] = useState<any>();
    const [statusFeedbackOverwriteObjectType, setStatusFeedbackOverwriteObjectType] =
        useState<any>();
    const [stockOwners, setStockOwners] = useState<any>();

    //To render Simple stockOwners list
    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    //To render statusFeedbackOverwrites statuses from config table for the given scope
    const statusFeedbackOverwriteStatusList = useGetStatusFeedbackOverwriteStatusConfigsQuery<
        Partial<GetStatusFeedbackOverwriteStatusConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteStatusList) {
            setStatusFeedbackOverwriteStatus(
                statusFeedbackOverwriteStatusList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteStatusList]);

    //To render statusFeedbackOverwrites object-types from config table for the given scope
    const statusFeedbackOverwriteObjectTypeList =
        useGetStatusFeedbackOverwriteObjectTypeConfigsQuery<
            Partial<GetStatusFeedbackOverwriteObjectTypeConfigsQuery>,
            Error
        >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteObjectTypeList) {
            setStatusFeedbackOverwriteObjectType(
                statusFeedbackOverwriteObjectTypeList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteObjectTypeList]);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateStatusFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateStatusFeedbackOverwriteMutation,
                _variables: CreateStatusFeedbackOverwriteMutationVariables,
                _context: any
            ) => {
                Router.push(`/status-feedback-overwrite/${data.createStatusFeedbackOverwrite.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createStatusFeedbackOverwrite = ({
        input
    }: CreateStatusFeedbackOverwriteMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                if (formData.stockOwnerId == undefined) {
                    delete formData['stockOwnerId'];
                }

                createStatusFeedbackOverwrite({ input: formData });
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

    const onFeedbackChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ feedback: e.target.checked });
    };

    const onSystemChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ system: e.target.checked });
    };

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item name="stockOwnerId" label={t('common:stock-owner')}>
                    <Select>
                        <Option value=""> </Option>
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('common:object-type')}
                    name="objectType"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Select>
                        {statusFeedbackOverwriteObjectType?.map(
                            (statusFeedbackOverwriteObjectType: any) => (
                                <Option
                                    key={statusFeedbackOverwriteObjectType.id}
                                    value={parseInt(statusFeedbackOverwriteObjectType.code)}
                                >
                                    {statusFeedbackOverwriteObjectType.text}
                                </Option>
                            )
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('common:status-code')}
                    name="status"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Select>
                        {statusFeedbackOverwriteStatus?.map(
                            (statusFeedbackOverwriteStatus: any) => (
                                <Option
                                    key={statusFeedbackOverwriteStatus.id}
                                    value={parseInt(statusFeedbackOverwriteStatus.code)}
                                >
                                    {statusFeedbackOverwriteStatus.text}
                                </Option>
                            )
                        )}
                    </Select>
                </Form.Item>
                <Form.Item name="feedback">
                    <Checkbox onChange={onFeedbackChange}>{t('common:feedback')}</Checkbox>
                </Form.Item>
                <Form.Item name="customValue" label={t('common:custom-value')}>
                    <InputNumber />
                </Form.Item>
                {/*<Form.Item name="system">
                    <Checkbox onChange={onSystemChange}>{t('common:system')}</Checkbox>
                </Form.Item>*/}
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
