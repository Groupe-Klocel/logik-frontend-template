import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { FilterColumnType, FormDataType } from '../../../models/Models';

export interface IFormGroupProps {
    inputs: Array<FilterColumnType>;
}

const FormGroup: FC<IFormGroupProps> = (props: IFormGroupProps) => {
    const { t } = useTranslation();

    return (
        <>
            {props.inputs.map((item: FilterColumnType, number) => {
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
