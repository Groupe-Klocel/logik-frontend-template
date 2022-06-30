import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    GetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    GetStatusFeedbackOverwriteStatusConfigsQuery,
    SimpleGetAllStockOwnersQuery,
    UpdateStatusFeedbackOverwriteMutation,
    UpdateStatusFeedbackOverwriteMutationVariables,
    useGetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    useGetStatusFeedbackOverwriteStatusConfigsQuery,
    useSimpleGetAllStockOwnersQuery,
    useUpdateStatusFeedbackOverwriteMutation
} from 'generated/graphql';

const { Option } = Select;
const { TextArea } = Input;

export type EditStatusFeedbackOverwriteFormProps = {
    statusFeedbackOverwriteId: string;
    details: any;
};

export const EditStatusFeedbackOverwriteForm: FC<EditStatusFeedbackOverwriteFormProps> = ({
    statusFeedbackOverwriteId,
    details
}: EditStatusFeedbackOverwriteFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [feedbackValue, setFeedbackValue] = useState(details.feedback);
    const [systemValue, setSystemValue] = useState(details.system);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

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

    const { mutate, isLoading: updateLoading } = useUpdateStatusFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateStatusFeedbackOverwriteMutation,
                _variables: UpdateStatusFeedbackOverwriteMutationVariables,
                _context: any
            ) => {
                router.push(`/status-feedback-overwrite/${data.updateStatusFeedbackOverwrite?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateStatusFeedbackOverwrite = ({
        id,
        input
    }: UpdateStatusFeedbackOverwriteMutationVariables) => {
        mutate({ id, input });
    };

    const onFeedbackChange = (e: CheckboxChangeEvent) => {
        setFeedbackValue(!feedbackValue);
        form.setFieldsValue({ feedback: e.target.checked });
    };

    const onSystemChange = (e: CheckboxChangeEvent) => {
        setSystemValue(!systemValue);
        form.setFieldsValue({ system: e.target.checked });
    };

    // to validate empty field when replenish is false
    useEffect(() => {
        form.validateFields(['feedback']);
    }, [feedbackValue, form]);

    // to validate empty field when replenish is false
    useEffect(() => {
        form.validateFields(['system']);
    }, [systemValue, form]);

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                if (formData.stockOwnerId == undefined) {
                    formData.stockOwnerId = stockOwners?.find(
                        (e: any) => e.name == formData.associatedStockOwner
                    ).id;
                }
                delete formData['associatedStockOwner'];
                delete formData['stockOwner'];
                updateStatusFeedbackOverwrite({ id: statusFeedbackOverwriteId, input: formData });
            })
            .catch((err) => {
                showError(t('error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedStockOwner: details.stockOwner.name
        };
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
                <Form.Item name="stockOwnerId" label={t('common:stock-owner')}>
                    <Select disabled={details?.system === true ? true : false}>
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
                    <Select disabled={details?.system === true ? true : false}>
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
                    <Select disabled={details?.system === true ? true : false}>
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
                    <Checkbox
                        checked={feedbackValue}
                        onChange={onFeedbackChange}
                        disabled={details?.system === true ? true : false}
                    >
                        {t('common:feedback')}
                    </Checkbox>
                </Form.Item>
                <Form.Item name="custom-value" label={t('common:custom-value')}>
                    <Input />
                </Form.Item>
                {/*<Form.Item name="system">
                    <Checkbox checked={systemValue} onChange={onSystemChange}>
                        {t('common:system')}
                    </Checkbox>
                </Form.Item>*/}
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
