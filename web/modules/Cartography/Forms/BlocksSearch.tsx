import { Form, Input, InputNumber, Checkbox, Select } from 'antd';
import { isBoolean } from 'lodash';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

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
                <Form.Item initialValue={false} name="bulk">
                    <Checkbox>{t('d:bulk')}</Checkbox>
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
