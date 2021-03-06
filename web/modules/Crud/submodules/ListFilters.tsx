import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { FilterFieldType, FormDataType } from '../../../models/Models';

export interface IGeneralSearchProps {
    form: any;
    columns: Array<FilterFieldType>;
}

const ListFilters: FC<IGeneralSearchProps> = ({ form, columns }: IGeneralSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                {columns.map((item: FilterFieldType, number) => {
                    if (item.type === FormDataType.Number)
                        return (
                            <Form.Item name={item.name} label={t(`d:${item.name}`)} key={item.name}>
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        );
                    else if (item.type == FormDataType.String)
                        return (
                            <Form.Item name={item.name} label={t(`d:${item.name}`)} key={item.name}>
                                <Input />
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
            </Form>
        </>
    );
};

ListFilters.displayName = 'ListFilters';

export { ListFilters };
