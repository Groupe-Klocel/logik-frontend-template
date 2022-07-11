import { useStockOwnerIds } from '@helpers';
import { Form, Input, InputNumber, Row, Col, Checkbox, AutoComplete, DatePicker, Select } from 'antd';
import { useAuth } from 'context/AuthContext';
import { useListConfigsForAScopeQuery } from 'generated/graphql';
import { debounce } from 'lodash';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select

interface IOption {
    value: string;
    id: string;
}

export interface IPurchaseOrderFormProps {
    id?: string;
    details?: any;
    mode?: string;
    form: any;
}

const PurchaseOrderForm: FC<IPurchaseOrderFormProps>  = ({form, mode}: IPurchaseOrderFormProps) => {
    const { t } = useTranslation();
    const {graphqlRequestClient} = useAuth();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const stockOwner = t('d:stockOwner');
    const stockOwnerId = t('d:stockOwnerId');
    const supplier = t('d:supplier');
    const status = t('d:status');
    const ltype = t('d:type');
    const expGoodsInDate = t('d:expectedGoodsInDate');
    const comment = t('d:comment');
    const name = t('d:name');

    // END TEXTS TRANSLATION

    const [cidOptions, setCIdOptions] = useState<Array<IOption>>([]);
    const [companyName, setCompanyName] = useState<string>('');
    const [cId, setCId] = useState<string>('');
    const [typeId, setTypeId] = useState<string>('');
    const [statusId, setStatusId] = useState<string>('');
    const [statusTexts, setStatusTexts] = useState<any>();
    const [typeTexts, setTypeTexts] = useState<any>();
    const addCodeInList = ['10101', '10102', '10103']
    
    const cData = useStockOwnerIds({ name: `${companyName}%` }, 1, 100, null);  

    const statusTextList = useListConfigsForAScopeQuery(
        graphqlRequestClient,
        (mode == 'add') ? (
            {
                scope: 'purchase_order_status',
                code: '8'
            }
        ): (
            {
                scope: 'purchase_order_status',
            }
        )
    )

    const typeTextList = useListConfigsForAScopeQuery(
        graphqlRequestClient,
        {
            scope: 'purchase_order_type'
        }
    )

    useEffect(() => {
        const formValue = form.getFieldsValue();
        form.setFieldsValue({ ...formValue, stockOwnerId: cId, companyName: companyName });
    }, [cId]);

    useEffect(() => {
        if (cData.data) {
            const newIdOpts: Array<IOption> = [];
            cData.data.stockOwners?.results.forEach(({ id, name }) => {
                if(form.getFieldsValue(true).stockOwnerId === id) {
                    setCompanyName(name!);
                    setCId(id!);
                }
                newIdOpts.push({ value: name!, id: id! });
            });
            setCIdOptions(newIdOpts);
        }
    }, [companyName, cData.data]);

    useEffect(()=> {
        if (statusTextList) {
            setStatusTexts(statusTextList?.data?.listConfigsForAScope);
            if(mode == 'add') {
                setStatusId('8');
            }
        }
    }, [statusTextList])

    
    useEffect(()=> {
        if (typeTextList) {
            setTypeTexts(typeTextList?.data?.listConfigsForAScope);
        }
    }, [typeTextList])

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} xl={12}>
                <Form.Item
                    label={name}
                    name="name"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Input style={{ width: '100%' }} disabled={mode=='edit'? true: false}/>
                </Form.Item>
                <Form.Item
                    label={stockOwnerId}
                    name="stockOwnerId"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                    style={{ display: 'none' }}
                >
                    <InputNumber style={{ width: '100%' }} value={cId} />
                </Form.Item>
                <Form.Item
                    label={stockOwner}
                    name="companyName"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <AutoComplete
                        style={{ width: '100%' }}
                        options={cidOptions}
                        value={companyName}
                        // disabled={companyName !== '' ? true: false}
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
                        disabled={mode=='edit'? true: false}
                    />
                </Form.Item>

                <Form.Item
                    label={ltype}
                    name="type"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Select 
                        defaultValue=""
                        disabled={mode=='edit'? true: false}
                    >
                        {typeTexts?.map((type: any) => {
                            if(mode == 'add') {
                                if(addCodeInList.includes(type.code)) {
                                    return (
                                        <Option key={type.code} value={type.code}>
                                            {type.text}
                                        </Option>
                                    )        
                                }
                            } else {
                                return (
                                    <Option key={type.code} value={type.code}>
                                        {type.text}
                                    </Option>
                                )
                            }
                        }
                        )}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={status}
                    name="status"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Select 
                        // disabled={(mode=='add' || mode=='edit')? true: false}
                        disabled
                    >
                        {statusTexts?.map((s: any) => (
                            <Option key={s.code} value={s.code}>
                                {s.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
                <Form.Item
                    label={supplier}
                    name="supplier"
                >
                    <Input style={{ width: '100%' }} disabled={mode=='edit'? true: false}/>
                </Form.Item>

                <Form.Item label={expGoodsInDate} name="expectedGoodsInDate">
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item label={comment} name="comment">
                    <Input />
                </Form.Item>
            </Col>
        </Row>
    );
};

PurchaseOrderForm.displayName = 'PurchaseOrderForm';

export { PurchaseOrderForm };
