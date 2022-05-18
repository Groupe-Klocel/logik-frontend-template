import { Form, Input, InputNumber, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const { Option } = Select;

export type BlocksSearchProps = {
    form: any;
};

const BlocksSearch: FC<BlocksSearchProps> = ({ form }: BlocksSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="level" label={t('d:level')}>
                    <Input />
                </Form.Item>
                <Form.Item name="moveable" label={t('d:moveable')}>
                    <Select defaultValue="True">
                        <Option value="Null">Null</Option>
                        <Option value="True">True</Option>
                        <Option value="False">False</Option>
                    </Select>
                    {/* <Checkbox>{t("d:moveable")}</Checkbox> */}
                </Form.Item>
            </Form>
        </>
    );
};

BlocksSearch.displayName = 'BlocksSearch';

export { BlocksSearch };
