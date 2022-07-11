import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreateBarcodeMutation,
    CreateBarcodeMutation,
    CreateBarcodeMutationVariables,
    useGetBarcodesRotationsParamsQuery,
    GetBarcodesRotationsParamsQuery,
    useGetBarcodesPreparationModesParamsQuery,
    GetBarcodesPreparationModesParamsQuery,
    useSimpleGetAllStockOwnersQuery,
    SimpleGetAllStockOwnersQuery,
    useSimpleGetAllArticlesLusQuery,
    SimpleGetAllArticlesLusQuery
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

import { string } from 'prop-types';

interface IOption {
    value: string;
    id: string;
}
const { Option } = Select;

export const AddBarcodeForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    // const selectArticle = t('common:article');
    // const selectArticlePlaceholder = t('messages:please-select', { name: t('common:article') });
    const stockOwner = t('d:stockOwner');
    const name = t('common:name');
    const rotation = t('d:rotation');
    const preparationMode = t('d:preparationMode');
    const supplierName = t('d:supplierName');
    const supplierArticleCode = t('d:supplierArticleCode');
    const article = t('common:article');
    const flagDouble = t('d:flagDouble');
    const quantity = t('d:quantity');
    const blackListed = t('d:blackListed');
    const logisticUnit = t('d:logisticUnit');
    const barcode = t('common:barcode');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const submit = t('actions:submit');
    const cancel = t('actions:cancel');

    // const articleSelectErrorMessage = `${t('messages:error-message-select-1')} ${t(
    //     'common:article'
    // )}`;

    // END TEXTS TRANSLATION

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const [idOptions, setIdOptions] = useState<Array<IOption>>([]);
    const [aId, setAId] = useState<number>();
    const [articleName, setArticleName] = useState<string>('');

    const [barcodeRotations, setBarcodeRotations] = useState<any>();
    const [barcodePreparationModes, setBarcodePreparationModes] = useState<any>();
    const [stockOwners, setStockOwners] = useState<any>();
    //const [articleLus, setArticleLus] = useState<any>();
    /* Find the fields of articles lu list to do an auto-complete */
    const [articlesList, setArticlesList] = useState<any>({ id: string, name: string });

    //To render carriers statuses from config table for the given scope
    const barcodeRotationList = useGetBarcodesRotationsParamsQuery<
        Partial<GetBarcodesRotationsParamsQuery>,
        Error
    >(graphqlRequestClient);

    const barcodePreparationModeList = useGetBarcodesPreparationModesParamsQuery<
        Partial<GetBarcodesPreparationModesParamsQuery>,
        Error
    >(graphqlRequestClient);

    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    const articleLuList = useSimpleGetAllArticlesLusQuery<
        Partial<SimpleGetAllArticlesLusQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (barcodeRotationList) {
            setBarcodeRotations(barcodeRotationList?.data?.listParametersForAScope);
        }
    }, [barcodeRotationList]);

    useEffect(() => {
        if (barcodePreparationModeList) {
            setBarcodePreparationModes(barcodePreparationModeList?.data?.listParametersForAScope);
        }
    }, [barcodePreparationModeList]);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    // useEffect(() => {
    //     const articlesArray: any[] | undefined = [];
    //     if (articlesList) {
    //     }
    // })

    // useEffect(() => {
    //     const articlesArray: any[] | undefined = [];
    //     if (articleLuList) {
    //         //setArticleLus(articleLuList?.data?.articleLus?.results);
    //         const articleLus = articleLuList?.data?.articleLus?.results;
    //         articleLus?.forEach((e: any) => articlesArray.push(e.article));
    //         setArticlesList(articlesArray);
    //     }
    // }, [articleLuList]);

    //useEffect(() => {}, [articleLus]);

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
    //const { data } = useArticleIds({ name: `${articleName}%` }, 1, 100, null);

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

    // useEffect(() => {
    //     const formValue = form.getFieldsValue();
    //     form.setFieldsValue({ ...formValue, articleId: aId });
    // }, [aId]);

    // useEffect(() => {
    //     if (data) {
    //         const newIdOpts: Array<IOption> = [];
    //         data.articleLus?.results.forEach(({ id, name: string }) => {
    //             newIdOpts.push({ value: name, id: id! });
    //         });
    //         setIdOptions(newIdOpts);
    //     }
    // }, [articleName, data]);

    // useEffect(() => {
    //     const articlesArray: any[] | undefined = [];
    //     articleLus?.forEach((e: any) => articlesArray.push(e.article));
    //     setArticlesList(articlesArray);
    // }, [articleLus]);

    // console.log(articleLus?.map((e: any) => e.article.id));
    //console.log(articlesList);
    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={8} xl={12}>
                        <Form.Item
                            name="stockOwnerId"
                            label={stockOwner}
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Select>
                                <Option value=""> </Option>
                                {stockOwners?.map((stockOwner: any) => (
                                    <Option key={stockOwner.id} value={stockOwner.id}>
                                        {stockOwner.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item
                            label={article}
                            name="articleLu"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            {
                                <AutoComplete style={{ width: '100%' }}>
                                    {/* {articlesList?.map((article: any) => (
                                        <Option key={article.id} value={article.id}>
                                            {article.name}
                                        </Option>
                                    ))} */}
                                </AutoComplete>
                            }
                        </Form.Item>
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item
                            label={logisticUnit}
                            name="logisticUnit"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            {
                                <AutoComplete style={{ width: '100%' }}>
                                    {/* {articlesList?.map((article: any) => (
                                        <Option key={article.id} value={article.id}>
                                            {article.name}
                                        </Option>
                                    ))} */}
                                </AutoComplete>
                            }
                        </Form.Item>
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item
                            label={barcode}
                            name="name"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item label={supplierName} name="supplierName">
                            <Input />
                        </Form.Item>
                        {/* <Form.Item name="blackListed" valuePropName="checked" initialValue={false}>
                            <Checkbox>{blackListed}</Checkbox>
                        </Form.Item> */}
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item label={supplierArticleCode} name="supplierArticleCode">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item name="rotation" label={rotation}>
                            <Select defaultValue="">
                                <Option value=""> </Option>
                                {barcodeRotations?.map((barcodeRotation: any) => (
                                    <Option
                                        key={barcodeRotation.id}
                                        value={parseInt(barcodeRotation.code)}
                                    >
                                        {barcodeRotation.text}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={8} xl={12}>
                        <Form.Item
                            name="preparationMode"
                            label={preparationMode}
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Select defaultValue="">
                                <Option value=""> </Option>
                                {barcodePreparationModes?.map((barcodePreparationMode: any) => (
                                    <Option
                                        key={barcodePreparationMode.id}
                                        value={parseInt(barcodePreparationMode.code)}
                                    >
                                        {barcodePreparationMode.text}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {submit}
                        </Button>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Button danger onClick={() => router.back()}>
                            {cancel}
                        </Button>
                    </Col>
                </Row>
            </div>
        </WrapperForm>
    );
};
