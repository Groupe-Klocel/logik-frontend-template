import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

enum FilterTypeEnum {
    Number,
    String,
    Boolean
}

type SearchFilter = {
    name: string;
    type: FilterTypeEnum;
};
export interface IGeneralSearchProps {
    form: any;
    columns: Array<SearchFilter>;
}

const ListSearchComponent: FC<IGeneralSearchProps> = ({ form, columns }: IGeneralSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                {columns.map((item: SearchFilter, number) => {
                    if (item.type === FilterTypeEnum.Number)
                        return (
                            <Form.Item name={item.name} label={t(`d:${item.name}`)} key={item.name}>
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        );
                    else if (item.type == FilterTypeEnum.String)
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

ListSearchComponent.displayName = 'ListSearchComponent';

export { FilterTypeEnum, ListSearchComponent };
export type { SearchFilter };
