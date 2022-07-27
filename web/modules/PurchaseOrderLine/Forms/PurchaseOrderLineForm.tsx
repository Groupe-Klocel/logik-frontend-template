import { Form, Input, Select, InputNumber, AutoComplete } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { useArticleIds, usePurchaseOrderIds, useStockOwnerIds } from '@helpers';

const { Option } = Select;

export interface IPurchaseOrderLineFormProps {
    form: any;
    companyId: string;
    purchaseOrderId: string;
}

interface IOption {
    value: string;
    id: string;
}


const PurchaseOrderLineForm: FC<IPurchaseOrderLineFormProps>  = ({companyId, purchaseOrderId, form} : IPurchaseOrderLineFormProps) => {
    const { t } = useTranslation();

    const router = useRouter();

    const {soid, poid} = router.query;

    const [idOptions, setIdOptions] = useState<Array<IOption>>([]);
    const [articleName, setArticleName] = useState<string>('');
    const [aId, setAId] = useState<string>('');

    const [cidOptions, setCIdOptions] = useState<Array<IOption>>([]);
    const [companyName, setCompanyName] = useState<string>('');
    const [cId, setCId] = useState<string>('');

    const [pidOptions, setPIdOptions] = useState<Array<IOption>>([]);
    const [purchaseOrderName, setPurchaseOrderName] = useState<string>('');
    const [pId, setPId] = useState<string>('');

    const articleId = t('d:articleId');    
    const errorMessageEmptyInput = t('messages:error-message-empty-input');    
    const reservation = t('d:reservation');
    const blockingStatus = t('d:blockingStatus');
    const status = t('d:status');
    const quantityMax = t('d:quantityMax');
    const quantity = t('d:quantity');
    const article = t('d:article');    
    const company = t('d:stockOwner');
    const purchaseOrder = t('d:purchaseOrder');

    const { data } = useArticleIds({ name: `${articleName}%` }, 1, 100, null);

    useEffect(() => {
        const formValue = form.getFieldsValue();
        form.setFieldsValue({ ...formValue, articleId: aId, articleName: articleName });
    }, [aId]);

    useEffect(() => {
        if (data) {
            const newIdOpts: Array<IOption> = [];
            data.articles?.results.forEach(({ id, name }) => {
                if(form.getFieldsValue(true).articleId === id) {
                    setAId(id!);
                    setArticleName(name!);
                }
                newIdOpts.push({ value: "" + name, id: id! });

            });
            setIdOptions(newIdOpts);
        }
    }, [articleName, data]);



    const pData = usePurchaseOrderIds({ name: `${purchaseOrderName}%` }, 1, 100, null);

    useEffect(() => {
        const formValue = form.getFieldsValue();
        form.setFieldsValue({ ...formValue, purchaseOrderId: pId, purchaseOrderName: purchaseOrderName });
    }, [pId]);

    useEffect(() => {
        if (pData.data) {
            const newIdOpts: Array<IOption> = [];
            pData.data.purchaseOrders?.results.forEach(({ id, name }) => {
                if(id === poid || form.getFieldsValue(true).purchaseOrderId === id) {
                    setPId(id!);
                    setPurchaseOrderName(name!);
                }
                newIdOpts.push({ value: name!, id: id! });
            });
            setPIdOptions(newIdOpts);
        }
    }, [purchaseOrderName, pData.data]);


    const cData = useStockOwnerIds({ name: `${companyName}%` }, 1, 100, null);

    useEffect(() => {
        const formValue = form.getFieldsValue();
        form.setFieldsValue({ ...formValue, stockOwnerId: cId, companyName: companyName });
    }, [cId]);

    useEffect(() => {
        if (cData.data) {
            const newIdOpts: Array<IOption> = [];
            cData.data.stockOwners?.results.forEach(({ id, name }) => {
                if(id == soid || form.getFieldsValue(true).stockOwnerId === id) {
                    setCId(id!);
                    setCompanyName(name!);
                }
                newIdOpts.push({ value: name!, id: id! });
            });
            setCIdOptions(newIdOpts);
        }
    }, [companyName, cData.data]);



    return (
        <>
            <Form.Item
                label={purchaseOrder}
                name="purchaseOrderId"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
                style={{ display: 'none' }}
            >
                <InputNumber style={{ width: '100%' }} value={pId} />
            </Form.Item>
            <Form.Item
                label={purchaseOrder}
                name="purchaseOrderName"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <AutoComplete
                    style={{ width: '100%' }}
                    options={pidOptions}
                    value={purchaseOrderName}
                    disabled={purchaseOrderName !== '' ? true: false}
                    filterOption={(inputValue, option) =>
                        option!.value
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onKeyUp={(e: any) => {
                        console.log('search purchaseOrder name');
                        debounce(() => {
                            setPurchaseOrderName(e.target.value);
                        }, 3000);
                    }}
                    onSelect={(value, option) => {
                        setPId(option.id);
                        setPurchaseOrderName(value);
                    }}
                />
            </Form.Item>


            <Form.Item
                label={companyId}
                name="stockOwnerId"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
                style={{ display: 'none' }}
            >
                <InputNumber style={{ width: '100%' }} value={cId} />
            </Form.Item>
            <Form.Item
                label={company}
                name="companyName"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <AutoComplete
                    style={{ width: '100%' }}
                    options={cidOptions}
                    value={companyName}
                    disabled={companyName !== '' ? true: false}
                    filterOption={(inputValue, option) =>
                        option!.value
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onKeyUp={(e: any) => {
                        console.log('search articles name');
                        debounce(() => {
                            setCompanyName(e.target.value);
                        }, 3000);
                    }}
                    onSelect={(value, option) => {
                        setCId(option.id);
                        setCompanyName(value);
                    }}
                />
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
                />
            </Form.Item>



            <Form.Item
                label={quantity}
                name="quantity"
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label={quantityMax}
                name="quantityMax"
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label={status}
                name="status"
                rules={[{required: true, message: errorMessageEmptyInput }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label={blockingStatus}
                name="blockingStatus"
                rules={[{required: true, message: errorMessageEmptyInput }]}
            >
                <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label={reservation}
                name="reservation"
            >
                <Input />
            </Form.Item>
        </>
    );
};

PurchaseOrderLineForm.displayName = 'PurchaseOrderLineForm';

export { PurchaseOrderLineForm };
