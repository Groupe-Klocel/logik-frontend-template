import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAppState } from 'context/AppContext';
import {
    CreateFeatureTypeDetailMutation,
    CreateFeatureTypeDetailMutationVariables,
    GetParameterByIdQuery,
    SimpleGetAllFeatureCodesQuery,
    useCreateFeatureTypeDetailMutation,
    useGetParameterByIdQuery,
    useSimpleGetAllFeatureCodesQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddFeatureTypeDetailForm = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;
    const { globalLocale } = useAppState();
    const searchedLanguage = globalLocale == 'en-US' ? 'en' : globalLocale;
    const [featureCodes, setFeatureCodes] = useState<any>();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    //to recover featureType information for pre-filling
    const featureTypeById = useGetParameterByIdQuery<GetParameterByIdQuery, Error>(
        graphqlRequestClient,
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            id
        }
    );

    //To render Simple feature codes list
    const featureCodesList = useSimpleGetAllFeatureCodesQuery<
        Partial<SimpleGetAllFeatureCodesQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (featureCodesList) {
            setFeatureCodes(featureCodesList?.data?.featureCodes?.results);
        }
    }, [featureCodesList]);

    useEffect(() => {
        if (featureTypeById) {
            const formData = form.getFieldsValue(true);
            //handle translations from parameters:
            const featureTypeObject = featureTypeById?.data?.parameter;
            if (featureTypeObject) {
                formData['featureType'] = parseInt(featureTypeObject?.code);
            }
            formData['associatedFeatureType'] = globalLocale
                ? featureTypeObject?.translation[searchedLanguage]
                : featureTypeObject?.value;
        }
    }, [featureTypeById]);

    const { mutate, isLoading: createLoading } = useCreateFeatureTypeDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateFeatureTypeDetailMutation,
                _variables: CreateFeatureTypeDetailMutationVariables,
                _context: any
            ) => {
                router.push(`/feature-type/${id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const onAtReceptionChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ atReception: e.target.checked });
    };
    const onAtPreparationChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ atPreparation: e.target.checked });
    };

    const onFeatureCodeChange = (e: any) => {
        const tmp_stockOwner = featureCodes.find((item: any) => item.id == e).stockOwnerId;
        form.setFieldsValue({ stockOwnerId: tmp_stockOwner });
    };

    const createFeatureTypeDetail = ({ input }: CreateFeatureTypeDetailMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['associatedFeatureType'];
                createFeatureTypeDetail({ input: formData });
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
                <Form.Item label={t('menu:feature-type')} name="associatedFeatureType">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label={t('menu:feature-code')}
                    name="featureCodeId"
                    hasFeedback
                    rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('menu:feature-code')
                        })}`}
                        onChange={onFeatureCodeChange}
                    >
                        {featureCodes?.map((featureCode: any) => (
                            <Option key={featureCode.id} value={featureCode.id}>
                                {featureCode.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item name="atReception">
                            <Checkbox onChange={onAtReceptionChange}>{t('d:atReception')}</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="atPreparation">
                            <Checkbox onChange={onAtPreparationChange}>
                                {t('d:atPreparation')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {t('actions:submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
