import { WrapperForm } from '@components';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    showError,
    showInfo,
    showSuccess,
    useHandlingUnitModelIds
} from '@helpers';
import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import {
    CreateHandlingUnitModelMutation,
    CreateHandlingUnitModelMutationVariables,
    GetHuModelsCategoriesParamsQuery,
    GetHuModelsTypesParamsQuery,
    useCreateHandlingUnitModelMutation,
    useGetHuModelsCategoriesParamsQuery,
    useGetHuModelsTypesParamsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddHandlingUnitModelForm = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [handlingUnitModels, setHandlingUnitModels] = useState<any>();
    const [types, setTypes] = useState<any>();
    const [categories, setCategories] = useState<any>();

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

    const { mutate, isLoading: createLoading } = useCreateHandlingUnitModelMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateHandlingUnitModelMutation,
                _variables: CreateHandlingUnitModelMutationVariables,
                _context: any
            ) => {
                router.push(`/handling-unit-model/${data.createHandlingUnitModel.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createHandlingUnitModel = ({ input }: CreateHandlingUnitModelMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                formData['status'] = 450;
                if (formData['parentHandlingUnitModelId'] == '') {
                    formData['parentHandlingUnitModelId'] = null;
                }
                createHandlingUnitModel({ input: formData });
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
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
