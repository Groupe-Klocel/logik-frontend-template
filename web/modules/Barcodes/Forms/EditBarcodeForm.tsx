import { FC, useEffect, useState } from 'react';
import { AutoComplete, Button, Col, Form, Input, InputNumber, Row, Space } from 'antd';
import { StyledForm, WrapperForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateArticleMutation,
    UpdateArticleMutation,
    UpdateArticleMutationVariables,
    UpdateBarcodeMutationVariables,
    useUpdateBarcodeMutation,
    UpdateBarcodeMutation
} from 'generated/graphql';
import { showError, showSuccess, showInfo, useArticleIds } from '@helpers';
import { AddBarcodeForm } from './AddBarcodeForm';
import { debounce } from 'lodash';

export interface IEditBarcodeFormProps {
    barcodeId: string;
    details: any;
}

interface IOption {
    value: string;
    id: string;
}

export const EditBarcodeForm: FC<IEditBarcodeFormProps> = ({
    barcodeId,
    details
}: IEditBarcodeFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();
    const name = t('common:name');
    const rotation = t('d:rotation');
    const supplierName = t('d:supplierName');
    const supplierArticleCode = t('d:supplierArticleCode');
    const companyId = t('d:companyId');
    const articleId = t('d:articleId');
    const article = t('common:article');
    const accountId = t('d:accountId');
    const preparationMode = t('d:preparationMode');
    const flagDouble = t('d:flagDouble');
    const quantity = t('d:quantity');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    const [idOptions, setIdOptions] = useState<Array<IOption>>([]);
    const [articleName, setArticleName] = useState<string>('');
    const [aId, setAId] = useState<number>();

    const { mutate, isLoading: updateLoading } = useUpdateBarcodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateBarcodeMutation,
                _variables: UpdateArticleMutationVariables,
                _context: any
            ) => {
                router.push(`/barcode/${data.updateBarcode?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );
    const { data } = useArticleIds({ name: `${articleName}%` }, 1, 100, null);

    const updateBarcode = ({ id, input }: UpdateBarcodeMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
                delete formData.articleName;
                delete formData.article;
                updateBarcode({ input: formData, id: barcodeId });
            })
            .catch((err) => {
                if (!aId) {
                    showError(t('messages:error-selected-article-not-exist'));
                } else {
                    showError(t('messages:error-creating-data'));
                }
            });
    };

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['modified'];
        tmp_details['articleName'] = details.article.name;
        form.setFieldsValue(tmp_details);
        setAId(details.articleId);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    useEffect(() => {
        const formValue = form.getFieldsValue();
        form.setFieldsValue({ ...formValue, articleId: aId });
    }, [aId]);

    useEffect(() => {
        if (data) {
            const newIdOpts: Array<IOption> = [];
            data.articles?.results.forEach(({ id, name }) => {
                newIdOpts.push({ value: name, id: id! });
            });
            setIdOptions(newIdOpts);
        }
    }, [articleName, data]);

    const handleSearch = (value: string) => {
        setArticleName(value);
    };

    return (
        <StyledForm>
            <WrapperForm>
                <Form form={form} scrollToFirstError>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} xl={12}>
                            <Form.Item
                                label={name}
                                name="name"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label={accountId}
                                name="accountId"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                label={companyId}
                                name="companyId"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                label={articleId}
                                name="articleId"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                                style={{ display: 'none' }}
                            >
                                <InputNumber style={{ width: '100%' }} value={aId} />
                            </Form.Item>

                            <Form.Item
                                label={article}
                                name="articleName"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <AutoComplete
                                    style={{ width: '100%' }}
                                    value={articleName}
                                    options={idOptions}
                                    filterOption={(inputValue, option) =>
                                        option!.value
                                            .toUpperCase()
                                            .indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                    onSelect={(value, option) => {
                                        setAId(option.id);
                                        setArticleName(value);
                                    }}
                                    onSearch={debounce(handleSearch, 350)}
                                />
                            </Form.Item>

                            <Form.Item
                                label={rotation}
                                name="rotation"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} xl={12}>
                            <Form.Item
                                label={flagDouble}
                                name="flagDouble"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                label={preparationMode}
                                name="preparationMode"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item label={supplierName} name="supplierName">
                                <Input />
                            </Form.Item>

                            <Form.Item label={supplierArticleCode} name="supplierArticleCode">
                                <Input />
                            </Form.Item>

                            <Form.Item label={quantity} name="quantity">
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <div style={{ textAlign: 'right' }}>
                    <Space>
                        <Button onClick={() => onFinish()} type="primary">
                            {t('actions:update')}
                        </Button>
                        <Button onClick={() => router.back()}>{t('actions:cancel')}</Button>
                    </Space>
                </div>
            </WrapperForm>
        </StyledForm>
    );
};
