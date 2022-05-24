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
                <Form.Item name="moveable" label={t('d:moveable')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                    {/* <Checkbox>{t("d:moveable")}</Checkbox> */}
                </Form.Item>
                <Form.Item name="bulk" label={t('d:bulk')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="level" label={t('d:level')}>
                    <Input />
                </Form.Item>
                <Form.Item label={t('d:blockGroup')} name="blockGroup">
                    <InputNumber min={0} max={10} defaultValue={0} />
                </Form.Item>
            </Form>
        </>
    );
};

BlocksSearch.displayName = 'BlocksSearch';

export { BlocksSearch };
