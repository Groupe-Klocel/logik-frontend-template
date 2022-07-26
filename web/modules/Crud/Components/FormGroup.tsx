import { Form, Input, Select, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { FilterColumn, FormDataType } from '../Models';

const { Option } = Select;

export interface IFormGroupProps {
    inputs: Array<FilterColumn>;
}

const FormGroup: FC<IFormGroupProps> = (props: IFormGroupProps) => {
    const { t } = useTranslation();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )

    // const selectCompany = t('common:company');
    // const selectCompanyPlaceholder = t('messages:please-select', { name: t('d:company') });

    const status = t('d:status');
    const name = t('common:name');
    const supplierName = t('d:supplierName');
    const code = t('d:code');
    const stockOwnerId = t('d:stockOwnerId');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const additionalDescription = t('d:additionalDescription');

    // END TEXTS TRANSLATION

    return (
        <>
            {props.inputs.map((item: FilterColumn, number) => {
                if (item.type === FormDataType.Number)
                    return (
                        <Form.Item
                            name={item.name}
                            label={t(`d:${item.name}`)}
                            key={item.name}
                            rules={item.rules!}
                        >
                            <InputNumber
                                style={{ width: '100%' }}
                                precision={item.numberPrecision}
                            />
                        </Form.Item>
                    );
                else if (item.type == FormDataType.String)
                    return (
                        <Form.Item
                            name={item.name}
                            label={t(`d:${item.name}`)}
                            key={item.name}
                            rules={item.rules!}
                        >
                            <Input />
                        </Form.Item>
                    );
                else if (item.type == FormDataType.TextArea)
                    return (
                        <Form.Item
                            name={item.name}
                            label={t(`d:${item.name}`)}
                            key={item.name}
                            rules={item.rules!}
                        >
                            <Input.TextArea />
                        </Form.Item>
                    );
                else
                    return (
                        <Form.Item
                            name={item.name}
                            valuePropName="checked"
                            initialValue={false}
                            key={item.name}
                        >
                            <Checkbox>{t(`d:${item.name}`)}</Checkbox>
                        </Form.Item>
                    );
            })}
        </>
    );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
