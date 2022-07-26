import { AutoComplete, Checkbox, Form, Input, InputNumber, Select } from "antd"
import useTranslation from "next-translate/useTranslation";
import { FC, useEffect, useState } from "react";
import { debounce } from 'lodash';
import { useAuth } from "context/AuthContext";
import { useListConfigsForAScopeQuery } from "generated/graphql";
import { useStockOwnerIds } from "@helpers";

const { Option } = Select

interface IOption {
    value: string;
    id: string;
}

export interface IPatternFormProps {
    id?: string;
    details?: any;
    mode?: string;
    form: any;
}

const PatternForm: FC<IPatternFormProps>  = ({form, mode}: IPatternFormProps)=> {
    const { t } = useTranslation();
    const {graphqlRequestClient} = useAuth();
    
    const stockOwner = t('d:stockOwner');
    const ltype = t('d:type');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    
    const [cidOptions, setCIdOptions] = useState<Array<IOption>>([]);
    const [companyName, setCompanyName] = useState<string>('');
    const [cId, setCId] = useState<string>('');
    const [typeTexts, setTypeTexts] = useState<any>();

    const typeTextList = useListConfigsForAScopeQuery(
        graphqlRequestClient,
        {
            scope: 'pattern_status'
        }
    )

    const cData = useStockOwnerIds({ name: `${companyName}%` }, 1, 100, null);  

    useEffect(() => {
        const formValue = form.getFieldsValue(true);
        console.log('reset form data')
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
        if (typeTextList) {
            setTypeTexts(typeTextList?.data?.listConfigsForAScope);
        }
    }, [typeTextList])

    return(
        <>
            <Form.Item
                label="StockOwnerId"
                name="stockOwnerId"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
                style={{ display: 'none' }}
            >
                <Input style={{ width: '100%' }} value={cId}/>
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
                    disabled={companyName !== '' ? true: false}
                    filterOption={(inputValue, option) =>
                        option!.value
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onKeyUp={(e: any) => {
                        console.log('search company name');
                        debounce(() => {
                            setCompanyName(e.target.value);
                        }, 3000);
                    }}
                    onSelect={(value, option) => {
                        setCId(option.id);
                        console.log(option.id);
                        setCompanyName(value);
                    }}
                    // disabled={mode=='edit'? true: false}
                />
            </Form.Item>

            <Form.Item
                label={ltype}
                name="patternType"
                rules={[{ required: true, message: errorMessageEmptyInput }]}
            >
                <Select 
                    disabled={mode=='edit'? true: false}
                >
                    {typeTexts?.map((type: any) => (
                        <Option key={type.code} value={type.code}>
                            {type.text}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label={t('name')}
                name="name"
                rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
            >
                <Input />
            </Form.Item>
        </>
    )
}

export { PatternForm };