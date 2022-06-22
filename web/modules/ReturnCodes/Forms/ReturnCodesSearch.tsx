import { Form, Input, InputNumber, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const { Option } = Select;

export type ReturnCodesSearchProps = {
    form: any;
};

const ReturnCodesSearch: FC<ReturnCodesSearchProps> = ({ form }: ReturnCodesSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label={t('common:description')}>
                    <Input />
                </Form.Item>
                <Form.Item name="type" label={t('common:type')}>
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

ReturnCodesSearch.displayName = 'ReturnCodesSearch';

export { ReturnCodesSearch };
