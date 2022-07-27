import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    GetFeedbackOverwriteMovementCodeParamsQuery,
    SimpleGetAllStockOwnersQuery,
    UpdateFeedbackOverwriteMutation,
    UpdateFeedbackOverwriteMutationVariables,
    useGetFeedbackOverwriteMovementCodeParamsQuery,
    useSimpleGetAllStockOwnersQuery,
    useUpdateFeedbackOverwriteMutation
} from 'generated/graphql';

const { Option } = Select;

export type EditFeedbackOverwriteFormProps = {
    feedbackOverwriteId: string;
    details: any;
};

export const EditFeedbackOverwriteForm: FC<EditFeedbackOverwriteFormProps> = ({
    feedbackOverwriteId,
    details
}: EditFeedbackOverwriteFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [stockOwners, setStockOwners] = useState<any>();
    const [movementCodes, setMovementCodes] = useState<any>();
    const [feedbackValue, setFeedbackValue] = useState(details.feedback);
    const [systemValue, setSystemValue] = useState(details.system);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

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

    const { mutate, isLoading: updateLoading } = useUpdateFeedbackOverwriteMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateFeedbackOverwriteMutation,
                _variables: UpdateFeedbackOverwriteMutationVariables,
                _context: any
            ) => {
                router.push(`/feedback-overwrite/${data.updateFeedbackOverwrite?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateFeedbackOverwrite = ({ id, input }: UpdateFeedbackOverwriteMutationVariables) => {
        mutate({ id, input });
    };

    const onFeedbackChange = (e: CheckboxChangeEvent) => {
        setFeedbackValue(!feedbackValue);
        form.setFieldsValue({ feedback: e.target.checked });
    };

    //FIXME: Kept for when the backend will be modified for superadmin only
    // const onSystemChange = (e: CheckboxChangeEvent) => {
    //     setSystemValue(!systemValue);
    //     form.setFieldsValue({ system: e.target.checked });
    // };

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
                delete formData['movementCodeText'];
                updateFeedbackOverwrite({ id: feedbackOverwriteId, input: formData });
            })
            .catch((err) => {
                showError(t('error-update-data'));
            });
    };

    console.log(details);

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
                    <Select disabled={details?.system === true ? true : false}>
                        {movementCodes?.map((code: any) => (
                            <Option key={code.id} value={parseInt(code.code)}>
                                {code.text}
                            </Option>
                        ))}
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
                    <InputNumber />
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
