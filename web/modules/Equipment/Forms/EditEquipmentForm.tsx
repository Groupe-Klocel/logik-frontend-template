import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    GetEquipmentLimitTypeConfigsQuery,
    SimpleGetAllStockOwnersQuery,
    UpdateEquipmentMutation,
    UpdateEquipmentMutationVariables,
    useGetEquipmentLimitTypeConfigsQuery,
    useSimpleGetAllStockOwnersQuery,
    useUpdateEquipmentMutation
} from 'generated/graphql';

const { Option } = Select;
const { TextArea } = Input;

export type EditEquipmentFormProps = {
    equipmentId: string;
    details: any;
};

export const EditEquipmentForm: FC<EditEquipmentFormProps> = ({
    equipmentId,
    details
}: EditEquipmentFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [stockOwners, setStockOwners] = useState<any>();
    const [equipmentLimitTypes, setEquipmentLimitTypes] = useState<any>();
    const [disableTypeRelated] = useState<boolean>(details.type === 20500 ? true : false);
    const [displayLimitTypeRelated, setDisplayLimitTypeRelated] = useState<boolean>(
        details.limitType === 20520 ? false : true
    );
    const [availableValue, setAvailableValue] = useState(details.available);
    const [distributedValue, setDistributedValue] = useState(details.distributed);
    const [monoCompanyValue, setMonoCompanyValue] = useState(details.monoCompany);
    const [monoCarrierValue, setMonoCarrierValue] = useState(details.monoCarrier);
    const [boxLineGroupValue, setBoxLineGroupValue] = useState(details.boxLineGrouped);
    const [boxMonoArticleValue, setBoxMonoArticleValue] = useState(details.boxMonoArticle);
    const [checkPositionValue, setCheckPositionValue] = useState(details.checkPosition);
    const [virtualValue, setVirtualValue] = useState(details.virtual);
    const [allowPickingOrderFreeValue, setAllowPickingOrderFreeValue] = useState(
        details.allowPickingOrderFree
    );

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

    //To render Equipment Limit types list configs
    const equipmentLimitTypeList = useGetEquipmentLimitTypeConfigsQuery<
        Partial<GetEquipmentLimitTypeConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (equipmentLimitTypeList) {
            setEquipmentLimitTypes(equipmentLimitTypeList?.data?.listConfigsForAScope);
        }
    }, [equipmentLimitTypeList]);

    const { mutate, isLoading: updateLoading } = useUpdateEquipmentMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateEquipmentMutation,
                _variables: UpdateEquipmentMutationVariables,
                _context: any
            ) => {
                router.push(`/equipment/${data.updateEquipment?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateEquipment = ({ id, input }: UpdateEquipmentMutationVariables) => {
        mutate({ id, input });
    };

    //manage call back on change boxes
    const onAvailableChange = (e: CheckboxChangeEvent) => {
        setAvailableValue(!availableValue);
        form.setFieldsValue({ available: e.target.checked });
    };
    const onDistributedChange = (e: CheckboxChangeEvent) => {
        setDistributedValue(!distributedValue);
        form.setFieldsValue({ distributed: e.target.checked });
    };
    const onMonoCompanyChange = (e: CheckboxChangeEvent) => {
        setMonoCompanyValue(!monoCompanyValue);
        form.setFieldsValue({ monoCompany: e.target.checked });
    };
    const onMonoCarrierChange = (e: CheckboxChangeEvent) => {
        setMonoCarrierValue(!monoCarrierValue);
        form.setFieldsValue({ monoCarrier: e.target.checked });
    };
    const onBoxLineGroupChange = (e: CheckboxChangeEvent) => {
        setBoxLineGroupValue(!boxLineGroupValue);
        form.setFieldsValue({ boxLineGroup: e.target.checked });
    };
    const onBoxMonoArticleChange = (e: CheckboxChangeEvent) => {
        setBoxMonoArticleValue(!boxMonoArticleValue);
        form.setFieldsValue({ boxMonoArticle: e.target.checked });
        // setBoxMonoArticleChange(e.target.checked);
    };
    const onCheckPositionChange = (e: CheckboxChangeEvent) => {
        setCheckPositionValue(!checkPositionValue);
        form.setFieldsValue({ checkPosition: e.target.checked });
    };
    const onVirtualChange = (e: CheckboxChangeEvent) => {
        setVirtualValue(!virtualValue);
        form.setFieldsValue({ virtual: e.target.checked });
    };
    const onAllowPickingOrderFreeChange = (e: CheckboxChangeEvent) => {
        setAllowPickingOrderFreeValue(!allowPickingOrderFreeValue);
        form.setFieldsValue({ allowPickingOrderFree: e.target.checked });
    };
    //handle call back on equipment Type change for displays
    const handleEquipmentLimitTypeChange = (value: any) => {
        if (value === 20520) {
            setDisplayLimitTypeRelated(false);
        } else {
            setDisplayLimitTypeRelated(true);
        }
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                console.log('zzz', formData);
                // if (formData.stockOwnerId == undefined) {
                //     formData.stockOwnerId = stockOwners?.find(
                //         (e: any) => e.name == formData.associatedStockOwner
                //     ).id;
                // }
                if (formData.limitType === 20520) {
                    formData['length'] = null;
                    formData['width'] = null;
                    formData['height'] = null;
                    formData['toleranceDimension'] = null;
                } else {
                    formData['nbMaxBox'] = null;
                }
                delete formData['associatedStockOwner'];
                delete formData['stockOwner'];
                delete formData['typeText'];
                delete formData['limitTypeText'];
                delete formData['statusText'];
                updateEquipment({ id: equipmentId, input: formData });
            })
            .catch((err) => {
                showError(t('error-update-data'));
            });
    };
    console.log('yyy', form.getFieldsValue(true));
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
                    label={t('d:type')}
                    name="typeText"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-empty-input')}`
                        }
                    ]}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label={t('common:name')}
                    name="name"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Col xs={24} xl={12}>
                    <Form.Item label={t('d:priority')} name="priority" hasFeedback>
                        <InputNumber min={1} />
                    </Form.Item>
                </Col>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item name="available">
                            <Checkbox checked={availableValue} onChange={onAvailableChange}>
                                {t('d:available')}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="distributed">
                            <Checkbox checked={distributedValue} onChange={onDistributedChange}>
                                {t('d:distributed')}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="monoCompany">
                            <Checkbox checked={monoCompanyValue} onChange={onMonoCompanyChange}>
                                {t('d:mono-company')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="monoCarrier">
                            <Checkbox checked={monoCarrierValue} onChange={onMonoCarrierChange}>
                                {t('d:mono-carrier')}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="boxLineGroup">
                            <Checkbox
                                checked={boxLineGroupValue}
                                disabled
                                onChange={onBoxLineGroupChange}
                            >
                                {t('d:box-line-group')}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="boxMonoArticle">
                            <Checkbox
                                disabled={disableTypeRelated}
                                checked={boxMonoArticleValue}
                                onChange={onBoxMonoArticleChange}
                            >
                                {t('d:box-mono-article')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label={t('d:qty-max-article')} name="qtyMaxArticle">
                    <InputNumber disabled={!disableTypeRelated} />
                </Form.Item>
                <Form.Item label={t('d:limit-type')} name="limitType" hasFeedback>
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('d:limit-type')
                        })}`}
                        disabled={disableTypeRelated}
                        onChange={handleEquipmentLimitTypeChange}
                    >
                        {equipmentLimitTypes?.map((equipmentLimitType: any) => (
                            <Option
                                key={equipmentLimitType.id}
                                value={parseInt(equipmentLimitType.code)}
                            >
                                {equipmentLimitType.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                {displayLimitTypeRelated == true ? (
                    <>
                        <Form.Item label={t('common:length')} name="length">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label={t('common:width')} name="width">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label={t('common:height')} name="height">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label={t('d:dimension-tolerance')} name="toleranceDimension">
                            <InputNumber />
                        </Form.Item>
                    </>
                ) : (
                    <Form.Item label={t('d:nb-max-box')} name="nbMaxBox">
                        <InputNumber />
                    </Form.Item>
                )}

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item name="checkPosition">
                            <Checkbox checked={checkPositionValue} onChange={onCheckPositionChange}>
                                {t('d:check-position')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="virtual">
                            <Checkbox checked={virtualValue} onChange={onVirtualChange}>
                                {t('d:virtual')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="allowPickingOrderFree">
                    <Checkbox
                        checked={allowPickingOrderFreeValue}
                        onChange={onAllowPickingOrderFreeChange}
                    >
                        {t('d:allow-picking-order-free')}
                    </Checkbox>
                </Form.Item>
                <Form.Item label={t('common:comment')} name="comment">
                    <TextArea></TextArea>
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
