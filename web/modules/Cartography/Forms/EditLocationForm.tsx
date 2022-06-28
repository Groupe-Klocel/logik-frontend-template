import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateLocationMutation,
    UpdateLocationMutation,
    UpdateLocationMutationVariables,
    useGetReplenishTypesConfigsQuery,
    GetReplenishTypesConfigsQuery,
    useGetRotationsParamsQuery,
    GetRotationsParamsQuery
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;
const { TextArea } = Input;

export type EditLocationFormProps = {
    locationId: string;
    details: any;
};

//FIXME: regarder pourquoi pas de delete de baseRotationUNit
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
    const [replenishTypes, setReplenishTypes] = useState<any>();
    const [rotations, setRotations] = useState<any>();
    const [selectedReplenish, setSelectedReplenish] = useState<any>(details.replenish);
    const [selectedReplenishType, setSelectedReplenishType] = useState<any>(details.replenishType);

    //To render replenish types from config table for the given scope
    const replenishTypesList = useGetReplenishTypesConfigsQuery<
        Partial<GetReplenishTypesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (replenishTypesList) {
            setReplenishTypes(replenishTypesList?.data?.listConfigsForAScope);
        }
    }, [replenishTypesList]);

    //To render rotations from parameters table for the given scope
    const rotationsList = useGetRotationsParamsQuery<Partial<GetRotationsParamsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (rotationsList) {
            setRotations(rotationsList?.data?.listParametersForAScope);
        }
    }, [rotationsList]);

    // to handle display of rotations
    const handleReplenishTypeChange = (value: string) => {
        setSelectedReplenishType(value);
    };

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
        setSelectedReplenish(e.target.checked);
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
                const formData = form.getFieldsValue(true);
                //update replenish type
                const replenishTypeCode =
                    formData.replenishTypeText == '-' || formData.replenishTypeText == ''
                        ? null
                        : parseInt(
                              replenishTypes?.find((e: any) => e.text == formData.replenishTypeText)
                                  .code
                          );
                formData.replenishType = replenishTypeCode;
                // // update rotation
                const rotationCode =
                    formData.baseUnitRotationText == '-' || formData.baseUnitRotationText == ''
                        ? null
                        : parseInt(
                              rotations?.find((e: any) => e.text == formData.baseUnitRotationText)
                                  .code
                          );
                formData.baseUnitRotation = rotationCode;

                //check if replenish has been unchecked and remove replenishType value if yes
                if (formData.replenish == false) {
                    formData['replenishType'] = null;
                }
                if (formData.replenishType != 20610) {
                    formData['baseUnitRotation'] = null;
                }
                delete formData['associatedBlock'];
                delete formData['replenishTypeText'];
                delete formData['baseUnitRotationText'];
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
            replenishTypeText: details.replenishType
                ? replenishTypes?.find((e: any) => e.code == details.replenishType).text
                : '-',
            baseUnitRotationText: details.baseUnitRotation
                ? rotations?.find((e: any) => e.code == details.baseUnitRotation).text
                : '-'
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
    }, [updateLoading, replenishTypes, rotations]);

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

                {selectedReplenish && (
                    <Form.Item
                        label={t('d:replenishType')}
                        name="replenishTypeText"
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
                        <Select onChange={handleReplenishTypeChange}>
                            <Option value="">-</Option>
                            {replenishTypes?.map((replenishType: any) => (
                                <Option key={replenishType.id} value={replenishType.text}>
                                    {replenishType.text}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                )}

                {selectedReplenish &&
                    (selectedReplenishType === 'Same rotation' ||
                        selectedReplenishType === 20610) && (
                        <Form.Item label={t('d:baseUnitRotation')} name="baseUnitRotationText">
                            <Select>
                                <Option value="">-</Option>
                                {rotations?.map((rotation: any) => (
                                    <Option key={rotation.id} value={rotation.text}>
                                        {rotation.text}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    )}
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
