import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import {
    BulkCreateLocationsMutation,
    BulkCreateLocationsMutationVariables,
    GetReplenishTypesConfigsQuery,
    GetRotationsParamsQuery,
    SimpleGetAllBLocksQuery,
    useBulkCreateLocationsMutation,
    useGetReplenishTypesConfigsQuery,
    useGetRotationsParamsQuery,
    useSimpleGetAllBLocksQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

export const AddLocationForm = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;
    const [blocks, setBlocks] = useState<any>();
    const [defaultBlock, setDefaultBlock] = useState<any>();
    const [replenishTypes, setReplenishTypes] = useState<any>();
    const [rotations, setRotations] = useState<any>();
    const [selectedReplenish, setSelectedReplenish] = useState<any>();
    const [selectedReplenishType, setSelectedReplenishType] = useState<any>(null);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

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

    //To render simple blocks list for attached block selection (id and name without any filter)
    const blocksList = useSimpleGetAllBLocksQuery<Partial<SimpleGetAllBLocksQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (id != undefined) {
            setDefaultBlock(blocksList?.data?.blocks?.results.find((e: any) => (e.id = id)));
            const formData = form.getFieldsValue(true);
            formData['blockId'] = id;
        }
        if (blocksList) {
            setBlocks(blocksList?.data?.blocks?.results);
        }
    }, [blocksList, id]);

    // to handle display of rotations
    const handleReplenishTypeChange = (value: string) => {
        setSelectedReplenishType(value);
    };

    const { mutate, isLoading: createLoading } = useBulkCreateLocationsMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: BulkCreateLocationsMutation,
                _variables: BulkCreateLocationsMutationVariables,
                _context: any
            ) => {
                router.push(`/locations`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const bulkCreateLocation = ({ input }: BulkCreateLocationsMutationVariables) => {
        mutate({ input });
    };

    const onReplenishChange = (e: CheckboxChangeEvent) => {
        setSelectedReplenish(e.target.checked);
        form.setFieldsValue({ replenish: e.target.checked });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                if (formData['replenish'] == false && formData['replenishType'] == '')
                    formData['replenishType'] = null;
                const NumberReplenishType = parseInt(formData.replenishType);
                formData.replenishType = NumberReplenishType;
                formData.baseUnitRotation = parseInt(formData.rotation);
                delete formData.rotation;
                bulkCreateLocation({ input: formData });
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
                <>
                    {defaultBlock ? (
                        <Form.Item label={t('d:associatedBlock')} name="associatedBlock">
                            <Input disabled={true} defaultValue={defaultBlock?.name} />
                        </Form.Item>
                    ) : (
                        <Form.Item
                            label={t('d:associatedBlock')}
                            name="blockId"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: `${t('messages:error-message-select-1', {
                                        name: t('d:block')
                                    })}`
                                }
                            ]}
                        >
                            <Select
                                placeholder={`${t('messages:please-select-a', {
                                    name: t('d:block')
                                })}`}
                            >
                                {blocks?.map((block: any) => (
                                    <Option key={block.id} value={block.id}>
                                        {block.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    )}
                </>
                <Form.Item
                    label={t('d:aisle')}
                    name="aisle"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-aisle')}
                    name="numberOfAisle"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber min={0} />
                </Form.Item>

                <Form.Item
                    label={t('common:column')}
                    name="column"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-column')}
                    name="numberOfColumn"
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-empty-input')}`
                        }
                    ]}
                >
                    <InputNumber min={0} />
                </Form.Item>

                <Form.Item
                    label={t('d:level')}
                    name="level"
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-empty-input')}`
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-level')}
                    name="numberOfLevel"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber min={0} />
                </Form.Item>

                <Form.Item
                    label={t('d:step')}
                    name="levelStep"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber min={0} />
                </Form.Item>

                <Form.Item
                    label={t('d:position')}
                    name="position"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-position')}
                    name="numberOfPosition"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item name="replenish" initialValue={false}>
                    <Checkbox onChange={onReplenishChange}>{t('d:replenish')}</Checkbox>
                </Form.Item>

                <Form.Item label={t('d:constraint')} name="constraint">
                    <Input />
                </Form.Item>
                {selectedReplenish && (
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
                        <Select defaultValue="" onChange={handleReplenishTypeChange}>
                            <Option value="">-</Option>
                            {replenishTypes?.map((replenishType: any) => (
                                <Option key={replenishType.id} value={replenishType.code}>
                                    {replenishType.text}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                )}
                {selectedReplenish && selectedReplenishType === '20610' && (
                    <Form.Item label={t('d:rotation')} name="rotation" hasFeedback>
                        <Select defaultValue="">
                            <Option value="">-</Option>
                            {rotations?.map((rotation: any) => (
                                <Option key={rotation.id} value={rotation.code}>
                                    {rotation.text}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                )}

                <Form.Item label={t('d:comment')} name="comment">
                    <TextArea />
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
