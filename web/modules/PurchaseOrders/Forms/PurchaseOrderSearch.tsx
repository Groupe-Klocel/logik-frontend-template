import { Form, Input, InputNumber, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IPurchaseOrderSearchProps {
    form: any;
}

const PurchaseOrderSearch: FC<IPurchaseOrderSearchProps> = ({ form }: IPurchaseOrderSearchProps) => {
    const { t } = useTranslation();

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="code" label={t('d:code')}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label={t('d:status')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="length" label={t('d:length')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="width" label={t('d:width')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="height" label={t('d:height')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="baseUnitWeight" label={t('d:baseUnitWeight')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="boxWeight" label={t('d:boxWeight')}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="permanentProduct" valuePropName="checked" initialValue={false}>
                    <Checkbox>{t('d:permanentProduct')}</Checkbox>
                </Form.Item>
            </Form>
        </>
    );
};

PurchaseOrderSearch.displayName = 'PurchaseOrderSearch';

export { PurchaseOrderSearch };
