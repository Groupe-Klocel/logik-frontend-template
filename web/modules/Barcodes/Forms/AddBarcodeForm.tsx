import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';
import {
    useCreateBarcodeMutation,
    CreateBarcodeMutation,
    CreateBarcodeMutationVariables
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
    useArticleIds,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_ITEMS_PER_PAGE,
    PaginationType
} from '@helpers';
import internal from 'stream';

interface IOption {
    value: string;
    id: number;
}

export const AddBarcodeForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    // const selectArticle = t('common:article');
    // const selectArticlePlaceholder = t('messages:please-select', { name: t('common:article') });
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
    // const articleSelectErrorMessage = `${t('messages:error-message-select-1')} ${t(
    //     'common:article'
    // )}`;

    // END TEXTS TRANSLATION

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const [idOptions, setIdOptions] = useState<Array<IOption>>([]);
    const [articleName, setArticleName] = useState<string>('');
    const [aId, setAId] = useState<number>();

    const { mutate, isLoading: createLoading } = useCreateBarcodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateBarcodeMutation,
                _variables: CreateBarcodeMutationVariables,
                _context: any
            ) => {
                router.push(`/barcode/${data.createBarcode.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );
    const { data } = useArticleIds({ name: `${articleName}%` }, 1, 100, null);

    const createBarcode = ({ input }: CreateBarcodeMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData.articleName;
                createBarcode({ input: formData });
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
        if (createLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [createLoading]);

    // useEffect(() => {
    //     if (idOptions) {
    //         console.log(idOptions);
    //     }
    // }, [idOptions]);

    useEffect(() => {
        const formValue = form.getFieldsValue();
        form.setFieldsValue({ ...formValue, articleId: aId });
    }, [aId]);

    useEffect(() => {
        if (data) {
            let newIdOpts: Array<IOption> = [];
            data.articles?.results.forEach(({ id, name }) => {
                newIdOpts.push({ value: name, id: id! });
            });
            setIdOptions(newIdOpts);
        }
    }, [articleName, data]);

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
                                options={idOptions}
                                filterOption={(inputValue, option) =>
                                    option!.value
                                        .toUpperCase()
                                        .indexOf(inputValue.toUpperCase()) !== -1
                                }
                                onKeyUp={(e: any) => {
                                    console.log('search articles name');
                                    debounce(() => {
                                        setArticleName(e.target.value);
                                    }, 3000);
                                }}
                                onSelect={(value, option) => {
                                    setAId(option.id);
                                    setArticleName(value);
                                }}
                                // onSearch={(value: string) => {
                                //     debounce(() => {
                                //         console.log('search articles name');
                                //         setArticleName(value);
                                //     }, 1000);
                                // }}
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
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
