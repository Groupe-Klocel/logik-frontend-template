import { WrapperForm } from '@components';
import { Button, Input, Form, InputNumber, Select, Row, Col, Card } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateHandlingUnitModelMutation,
    UpdateHandlingUnitModelMutation,
    UpdateHandlingUnitModelMutationVariables,
    useGetHuModelsTypesParamsQuery,
    GetHuModelsTypesParamsQuery,
    useGetHuModelsCategoriesParamsQuery,
    GetHuModelsCategoriesParamsQuery
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
    useHandlingUnitModelIds,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_ITEMS_PER_PAGE
} from '@helpers';

export type EditHandlingUnitModelFormProps = {
    handlingUnitModelId: string;
    details: any;
};

const { Option } = Select;

export const EditHandlingUnitModelForm: FC<EditHandlingUnitModelFormProps> = ({
    handlingUnitModelId,
    details
}: EditHandlingUnitModelFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [handlingUnitModels, setHandlingUnitModels] = useState<any>();
    const [types, setTypes] = useState<any>();
    const [categories, setCategories] = useState<any>();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    //To render In progress handling unit models list
    const { data } = useHandlingUnitModelIds(
        { status: 450 },
        DEFAULT_PAGE_NUMBER,
        DEFAULT_ITEMS_PER_PAGE,
        undefined
    );

    useEffect(() => {
        if (data) {
            setHandlingUnitModels(data?.handlingUnitModels?.results);
        }
    }, [data]);

    //To render types from parameter table for the given scope
    const typesList = useGetHuModelsTypesParamsQuery<Partial<GetHuModelsTypesParamsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (typesList) {
            setTypes(typesList?.data?.listParametersForAScope);
        }
    }, [typesList]);

    //To render categories from parameter table for the given scope
    const categoriesList = useGetHuModelsCategoriesParamsQuery<
        Partial<GetHuModelsCategoriesParamsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (categoriesList) {
            setCategories(categoriesList?.data?.listParametersForAScope);
        }
    }, [categoriesList]);

    const { mutate, isLoading: updateLoading } = useUpdateHandlingUnitModelMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateHandlingUnitModelMutation,
                _variables: UpdateHandlingUnitModelMutationVariables,
                _context: any
            ) => {
                router.push(`/handling-unit-model/${data.updateHandlingUnitModel?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateHandlingUnitModel = ({ id, input }: UpdateHandlingUnitModelMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['typeText'];
                delete formData['categoryText'];
                delete formData['statusText'];
                delete formData['parentHandlingUnitModel'];
                if (formData['parentHandlingUnitModelId'] == '') {
                    formData['parentHandlingUnitModelId'] = null;
                }
                updateHandlingUnitModel({ id: handlingUnitModelId, input: formData });
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
        if (details.parentHandlingUnitModelId == null) {
            tmp_details['parentHandlingUnitModelId'] = '';
        }
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [updateLoading]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('common:name')}
                    name="name"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('d:parentHandlingUnitModel')}
                    name="parentHandlingUnitModelId"
                    hasFeedback
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('d:parentHandlingUnitModel')
                        })}`}
                    >
                        <Option value="">{t('common:none')}</Option>
                        {handlingUnitModels?.map((model: any) => (
                            <Option key={model.id} value={model.id}>
                                {model.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('d:type')}
                    name="type"
                    hasFeedback
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('d:type')
                        })}`}
                    >
                        {types?.map((type: any) => (
                            <Option key={type.id} value={parseInt(type.code)}>
                                {type.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('d:category')}
                    name="category"
                    hasFeedback
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('d:category')
                        })}`}
                    >
                        {categories?.map((category: any) => (
                            <Option key={category.id} value={parseInt(category.code)}>
                                {category.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Card title={t('common:dimensions')}>
                            <Form.Item label={t('common:length')} name="length">
                                <InputNumber />
                            </Form.Item>

                            <Form.Item label={t('common:width')} name="width">
                                <InputNumber />
                            </Form.Item>

                            <Form.Item label={t('common:height')} name="height">
                                <InputNumber />
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Card title={t('common:weight')}>
                            <Form.Item label={t('d:emptyWeight')} name="weight">
                                <InputNumber />
                            </Form.Item>
                        </Card>
                    </Col>
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
