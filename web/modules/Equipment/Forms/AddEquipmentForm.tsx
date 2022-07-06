import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreateEquipmentMutation,
    CreateEquipmentMutation,
    CreateEquipmentMutationVariables,
    useSimpleGetAllStockOwnersQuery,
    SimpleGetAllStockOwnersQuery,
    useGetEquipmentTypesConfigsQuery,
    GetEquipmentTypesConfigsQuery,
    useGetEquipmentLimitTypeConfigsQuery,
    GetEquipmentLimitTypeConfigsQuery,
    useGetListOfPrioritiesQuery,
    GetListOfPrioritiesQuery
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;
const { TextArea } = Input;

export const AddEquipmentForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const name = t('common:name');
    const comment = t('common:comment');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    const [stockOwners, setStockOwners] = useState<any>();
    const [equipmentTypes, setEquipmentTypes] = useState<any>();
    const [equipmentLimitTypes, setEquipmentLimitTypes] = useState<any>();
    const [boxLineGroupedValue, setBoxLineGroupValue] = useState<boolean>(false);
    const [boxMonoArticleChange, setBoxMonoArticleChange] = useState<boolean>();
    const [disableTypeRelated, setDisableTypeRelated] = useState<boolean>(false);
    const [displayLimitTypeRelated, setDisplayLimitTypeRelated] = useState<boolean>(false);

    //To render Simple stock owners list
    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    //To render existing priorities list
    const priorityList = useGetListOfPrioritiesQuery<Partial<GetListOfPrioritiesQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (priorityList) {
            const receivedList = priorityList?.data?.equipments?.results.map(
                (e: any) => e.priority
            );
            if (receivedList) {
                form.setFieldsValue({ priority: Math.max(...receivedList) });
            }
        }
    }, [priorityList]);

    //To render Equipment types list configs
    const equipmentTypesList = useGetEquipmentTypesConfigsQuery<
        Partial<GetEquipmentTypesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (equipmentTypesList) {
            setEquipmentTypes(equipmentTypesList?.data?.listConfigsForAScope);
        }
    }, [equipmentTypesList]);

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

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateEquipmentMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateEquipmentMutation,
                _variables: CreateEquipmentMutationVariables,
                _context: any
            ) => {
                router.push(`/equipment/${data.createEquipment.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createEquipment = ({ input }: CreateEquipmentMutationVariables) => {
        mutate({ input });
    };

    //handle call back on equipment Type change for displays
    const handleEquipmentTypeChange = (value: any) => {
        if (value === 20500) {
            setDisableTypeRelated(true);
            setBoxLineGroupValue(true);
            setBoxMonoArticleChange(true);
            form.setFieldsValue({
                qtyMaxArticle: 1,
                boxLineGrouped: true,
                boxMonoArticle: true,
                limitType: 20520,
                limitTypeText: equipmentLimitTypes?.find((e: any) => e.code == 20520).text
            });
        } else {
            setDisableTypeRelated(false);
            setBoxLineGroupValue(false);
            setBoxMonoArticleChange(false);
            form.setFieldsValue({
                boxLineGrouped: false
            });
            delete form.getFieldsValue(true)['boxMonoArticle'];
            delete form.getFieldsValue(true)['qtyMaxArticle'];
            delete form.getFieldsValue(true)['limitType'];
        }
    };

    //handle call back on equipment Type change for displays
    const handleEquipmentLimitTypeChange = (value: any) => {
        if (value === 20520) {
            setDisplayLimitTypeRelated(false);
        } else {
            setDisplayLimitTypeRelated(true);
        }
    };

    //manage call back on change boxes
    const onPriorityChange = (value: number) => {
        form.setFieldsValue({ priority: value });
    };
    const onAvailableChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ available: e.target.checked });
    };
    const onDistributedChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ distributed: e.target.checked });
    };
    const onMonoCompanyChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ monoCompany: e.target.checked });
    };
    const onMonoCarrierChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ monoCarrier: e.target.checked });
    };
    const onBoxLineGroupChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ boxLineGroup: e.target.checked });
    };
    const onBoxMonoArticleChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ boxMonoArticle: e.target.checked });
        setBoxMonoArticleChange(e.target.checked);
    };
    const onCheckPositionChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ checkPosition: e.target.checked });
    };
    const onVirtualChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ virtual: e.target.checked });
    };
    const onAllowPickingOrderFreeChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ allowPickingOrderFree: e.target.checked });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                formData['status'] = 450;
                delete formData['limitTypeText'];
                createEquipment({ input: formData });
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

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('common:stock-owner')}
                    name="stockOwnerId"
                    hasFeedback
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: `${t('error-message-select-1')} ${t('stock-owner')}`
                    //     }
                    // ]}
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
                    label={t('d:type')}
                    name="type"
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
                            name: t('d:type')
                        })}`}
                        onChange={handleEquipmentTypeChange}
                    >
                        {equipmentTypes?.map((equipmentType: any) => (
                            <Option key={equipmentType.id} value={parseInt(equipmentType.code)}>
                                {equipmentType.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={name}
                    name="name"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Input />
                </Form.Item>
                <Col xs={24} xl={12}>
                    <Form.Item label={t('d:priority')} name="priority" hasFeedback>
                        <InputNumber min={1} onChange={onPriorityChange} />
                    </Form.Item>
                </Col>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item name="available">
                            <Checkbox onChange={onAvailableChange}>{t('d:available')}</Checkbox>
                        </Form.Item>
                        <Form.Item name="distributed">
                            <Checkbox onChange={onDistributedChange}>{t('d:distributed')}</Checkbox>
                        </Form.Item>
                        <Form.Item name="monoCompany">
                            <Checkbox onChange={onMonoCompanyChange}>
                                {t('d:mono-company')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="monoCarrier">
                            <Checkbox onChange={onMonoCarrierChange}>
                                {t('d:mono-carrier')}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="boxLineGroup">
                            <Checkbox
                                disabled
                                checked={boxLineGroupedValue}
                                onChange={onBoxLineGroupChange}
                            >
                                {t('d:box-line-group')}
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="boxMonoArticle">
                            <Checkbox
                                disabled={disableTypeRelated === true ? true : false}
                                checked={boxMonoArticleChange}
                                onChange={onBoxMonoArticleChange}
                            >
                                {t('d:box-mono-article')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label={t('d:qty-max-article')} name="qtyMaxArticle">
                    <InputNumber disabled={disableTypeRelated === false ? true : false} />
                </Form.Item>

                <Form.Item label={t('d:limit-type')} name="limitType" hasFeedback>
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('d:limit-type')
                        })}`}
                        disabled={disableTypeRelated === true ? true : false}
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
                            <Checkbox onChange={onCheckPositionChange}>
                                {t('d:check-position')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="virtual">
                            <Checkbox onChange={onVirtualChange}>{t('d:virtual')}</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item name="allowPickingOrderFree">
                    <Checkbox onChange={onAllowPickingOrderFreeChange}>
                        {t('d:allow-picking-order-free')}
                    </Checkbox>
                </Form.Item>
                <Form.Item label={comment} name="comment">
                    <TextArea>{comment}</TextArea>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
