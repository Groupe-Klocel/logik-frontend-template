import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { AutoComplete, Button, Col, Form, Input, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAuth } from 'context/AuthContext';
import {
    GetBarcodesPreparationModesParamsQuery,
    GetBarcodesRotationsParamsQuery,
    SimpleGetAllStockOwnersQuery,
    UpdateArticleMutationVariables,
    UpdateBarcodeMutation,
    UpdateBarcodeMutationVariables,
    useGetBarcodesPreparationModesParamsQuery,
    useGetBarcodesRotationsParamsQuery,
    useSimpleGetAllStockOwnersQuery,
    useUpdateBarcodeMutation
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

export type EditBarcodeFormProps = {
    barcodeId: string;
    details: any;
};

const { Option } = Select;

interface IOption {
    value: string;
    id: string;
}

export const EditBarcodeForm: FC<EditBarcodeFormProps> = ({
    barcodeId,
    details
}: EditBarcodeFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [form] = Form.useForm();

    const stockOwner = t('d:stockOwner');
    const rotation = t('d:rotation');
    const preparationMode = t('d:preparationMode');
    const supplierName = t('d:supplierName');
    const supplierArticleCode = t('d:supplierArticleCode');
    const article = t('common:article');
    const blackListed = t('d:blackListed');
    const logisticUnit = t('d:logisticUnit');
    const barcode = t('common:barcode');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const errorMessageUpdateData = t('messages:error-update-data');
    const successMessageUpdateData = t('messages:success-updated');
    const infoMessageUpdateData = t('messages:info-update-wip');
    const update = t('actions:update');
    const cancel = t('actions:cancel');

    const [barcodeRotationsValue, setBarcodeRotationsValue] = useState(details.barcodeRotation);
    const [barcodePreparationModesValue, setBarcodePreparationModesValue] = useState(
        details.barcodePreparationMode
    );
    const [stockOwnersValue, setStockOwnersValue] = useState(details.stockOwnerId);
    const [logisticUnitValue, setLogisticUnitValue] = useState(details.stockOwnerId);
    const [blackListedValue, setBlackListedValue] = useState(details.blackListed);
    const [stockOwners, setStockOwners] = useState<any>();
    const [barcodeRotations, setBarcodeRotations] = useState<any>();
    const [barcodePreparationModes, setBarcodePreparationModes] = useState<any>();

    const stockOwnersList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    const barcodeRotationList = useGetBarcodesRotationsParamsQuery<
        Partial<GetBarcodesRotationsParamsQuery>,
        Error
    >(graphqlRequestClient);

    const barcodePreparationModeList = useGetBarcodesPreparationModesParamsQuery<
        Partial<GetBarcodesPreparationModesParamsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnersList) {
            setStockOwners(stockOwnersList?.data?.stockOwners?.results);
        }
    }, [stockOwnersList]);

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

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdateBarcodeMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdateBarcodeMutation,
            _variables: UpdateArticleMutationVariables,
            _context: any
        ) => {
            router.push(`/barcode/${data.updateBarcode?.id}`);
            showSuccess(successMessageUpdateData);
        },
        onError: () => {
            showError(errorMessageUpdateData);
        }
    });
    //const { data } = useArticleIds({ name: `${articleName}%` }, 1, 100, null);

    const updateBarcode = ({ id, input }: UpdateBarcodeMutationVariables) => {
        mutate({ id, input });
    };

    const onBlackListedChange = (e: CheckboxChangeEvent) => {
        setBlackListedValue(!blackListedValue);
        form.setFieldsValue({ blackListed: e.target.checked });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
                updateBarcode({ input: formData, id: barcodeId });
            })
            .catch((err) => showError(errorMessageUpdateData));
    };
    console.log(details);

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedStockowner: details.stockOwner.name
        };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['modified'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(infoMessageUpdateData);
        }
    }, [updateLoading]);

    // useEffect(() => {
    //     const formValue = form.getFieldsValue();
    //     form.setFieldsValue({ ...formValue, articleId: aId });
    // }, [aId]);

    // useEffect(() => {
    //     if (data) {
    //         const newIdOpts: Array<IOption> = [];
    //         data.articles?.results.forEach(({ id, name: string }) => {
    //             newIdOpts.push({ value: name, id: id! });
    //         });
    //         setIdOptions(newIdOpts);
    //     }
    // }, [articleName, data]);

    // const handleSearch = (value: string) => {
    //     setArticleName(value);
    // };

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
                            label={barcode}
                            name="name"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Input />
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
                        <Form.Item label={supplierName} name="supplierName">
                            <Input />
                        </Form.Item>
                        {/* <Checkbox checked={blackListedValue} onChange={onBlackListedChange}>
                            {blackListed}
                        </Checkbox> */}
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
                        <Button type="primary" loading={updateLoading} onClick={onFinish}>
                            {update}
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
