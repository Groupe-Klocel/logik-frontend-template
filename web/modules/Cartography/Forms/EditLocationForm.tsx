import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateLocationMutation,
    UpdateLocationMutation,
    UpdateLocationMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

export type EditLocationFormProps = {
    locationId: string;
    details: any;
};

export const EditLocationForm: FC<EditLocationFormProps> = ({
    locationId,
    details
}: EditLocationFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [replenishValue, setReplenishValue] = useState(details.replenish);
    const [stockMinValue, setStockMinValue] = useState(details.allowCycleCountStockMin);
    console.log('replen', replenishValue);

    const { mutate, isLoading: updateLoading } = useUpdateLocationMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateLocationMutation,
                _variables: UpdateLocationMutationVariables,
                _context: any
            ) => {
                router.push(`/location/${data.updateLocation?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateLocation = ({ id, input }: UpdateLocationMutationVariables) => {
        mutate({ id, input });
    };

    const onReplenishChange = (e: CheckboxChangeEvent) => {
        setReplenishValue(!replenishValue);
        form.setFieldsValue({ replenish: e.target.checked });
    };

    const onStockMinChange = (e: CheckboxChangeEvent) => {
        setStockMinValue(!stockMinValue);
        form.setFieldsValue({ allowCycleCountStockMin: e.target.checked });
    };

    // to validate empty field when replenish is false
    useEffect(() => {
        form.validateFields(['replenishType']);
    }, [replenishValue, form]);

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                let formData = form.getFieldsValue(true);
                delete formData['associatedBlock'];
                console.log(formData);
                updateLocation({ id: locationId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedBlock: details.block.name,
            blockLevel: blockLevels?.find((e: any) => e.code == details.level).text
        };
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
                    label={t('d:associatedBlock')}
                    name="associatedBlock"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input disabled={true} />
                </Form.Item>

                <Form.Item name="replenish">
                    <Checkbox checked={replenishValue} onChange={onReplenishChange}>
                        {t('d:replenish')}
                    </Checkbox>
                </Form.Item>

                <Form.Item label={t('d:constraint')} name="constraint">
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:replenishType')}
                    name="replenishType"
                    hasFeedback
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (value !== null && getFieldValue('replenish') === false) {
                                    return Promise.reject(
                                        new Error(t('messages:replenish-validation-error'))
                                    );
                                }
                                return Promise.resolve();
                            }
                        })
                    ]}
                >
                    <Select
                        defaultValue=""
                        placeholder={details.replenishType == null ? '-' : details.replenishType}
                    >
                        <Option value="">-</Option>
                        <Option value="fakeReplenishType">fakeReplenishType</Option>
                    </Select>
                </Form.Item>

                <Form.Item label={t('d:baseUnitRotation')} name="baseUnitRotation">
                    <Select
                        defaultValue=""
                        placeholder={
                            details.baseUnitRotation == null ? '-' : details.baseUnitRotation
                        }
                    >
                        <Option value="">-</Option>
                        <Option value="fakeBaseUnitRotation">fakeBaseUnitRotation</Option>
                    </Select>
                </Form.Item>

                <Form.Item label={t('d:boxRotation')} name="boxRotation">
                    <Select
                        defaultValue=""
                        placeholder={details.boxRotation == null ? '-' : details.boxRotation}
                    >
                        <Option value="">-</Option>
                        <Option value="fakeBoxRotation">fakeBoxRotation</Option>
                    </Select>
                </Form.Item>

                <Form.Item label={t('d:comment')} name="comment">
                    <TextArea />
                </Form.Item>

                <Form.Item name="allowCycleCountStockMin">
                    <Checkbox checked={stockMinValue} onChange={onStockMinChange}>
                        {t('d:allowCycleCountStockMin')}
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
