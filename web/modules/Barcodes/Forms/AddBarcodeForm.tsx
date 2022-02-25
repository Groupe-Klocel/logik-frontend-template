import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Select, Form } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreateBarcodeMutation,
    CreateBarcodeMutation,
    CreateBarcodeMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo} from '@helpers';

const { Option } = Select;
export interface IAddBarcodeFormProps {}

export const AddBarcodeForm: FC<IAddBarcodeFormProps> = ({}: IAddBarcodeFormProps) => {
    let { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    const selectArticle = t('common:article');
    const selectArticlePlaceholder = t('messages:please-select', { name: t('common:article') });
    const name = t('common:name');
    const rotation = t('d:rotation');
    const supplierName = t('d:supplierName');
    const supplierArticleCode = t('d:supplierArticleCode');
    const companyId = t('d:companyId');
    const articleId = t('d:articleId');
    const accountId = t('d:accountId');
    const preparationMode = t('d:preparationMode');
    const flagDouble = t('d:flagDouble');
    const quantity = t('d:quantity');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    // const articleSelectErrorMessage = `${t('messages:error-message-select-1')} ${t(
    //     'common:article'
    // )}`;

    // END TEXTS TRANSLATION

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: createLoading,
        data
    } = useCreateBarcodeMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: CreateBarcodeMutation,
            _variables: CreateBarcodeMutationVariables,
            _context: unknown
        ) => {
            if (createLoading) {
                showInfo(t('messages:info-creating-wip'));
            } else {
                router.push(`/barcode/${data.createBarcode.id}`);
                showSuccess(t('messages:success-created'));
            }
        },
        onError: (error) => {
            showError(t('messages:error-creating-data'));
        }
    });

    const createBarcode = ({ input }: CreateBarcodeMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                createBarcode({ input: form.getFieldsValue(true) });
            })
            .catch((err) => showError(t('messages:error-creating-data')));
    };

    return (
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

                        {/* <Form.Item
                            label={selectArticle}
                            name="articleId"
                            hasFeedback
                            rules={[{ required: true, message: articleSelectErrorMessage }]}
                        >
                            <Select placeholder={selectArticlePlaceholder}>
                                {companiesData.map((article: any) => (
                                    <Option key={article.id} value={article.name}>
                                        {article.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item> */}

                        <Form.Item
                            label={articleId}
                            name="articleId"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <InputNumber style={{ width: '100%' }} />
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
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
