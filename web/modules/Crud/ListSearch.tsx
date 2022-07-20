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

const ListSearch: FC<IGeneralSearchProps> = ({ form, columns }: IGeneralSearchProps) => {
    const { t } = useTranslation();

    // For multi selection field
    // const companies = [];
    // for (let i = 0; i < 10; i++) {
    //     const value = `${i.toString(36)}${i}`;
    //     companies.push({
    //         value,
    //         disabled: i === 10
    //     });
    // }
    // function handleCompaniesSelect(value: string[]) {
    //     console.log(`selected ${value}`);
    // }

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

ListSearch.displayName = 'ListSearch';

export { FilterTypeEnum, ListSearch };
export type { SearchFilter };
