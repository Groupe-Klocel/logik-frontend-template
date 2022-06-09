import { Checkbox, Form, Input, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const { Option } = Select;
export type CarriersSearchTypeProps = {
    form: any;
};

const CarriersSearch: FC<CarriersSearchTypeProps> = ({ form }: CarriersSearchTypeProps) => {
    const { t } = useTranslation();
    const name = t('d:name');
    const available = t('d:available');
    const code = t('d:code');
    const counter = t('d:counter');
    const to_be_loaded = t('d:to_be_loaded');
    const to_be_palletized = t('d:to_be_palletized');
    const use_receipt_number = t('d:use_receipt_number');
    const parent_carrier = t('d:parent_carrier');
    const is_virtual = t('d:is_virtual');
    const status = t('d:status');
    const none = t('common:none');
    const yes = t('common:bool-yes');
    const no = t('common:bool-no');

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={name}>
                    <Input />
                </Form.Item>
                <Form.Item name="code" label={code}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label={status}>
                    <Input />
                </Form.Item>
                <Form.Item name="available" label={available}>
                    <Select defaultValue="">
                        <Option value="">{none}</Option>
                        <Option value="true">{yes}</Option>
                        <Option value="false">{no}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="toBeLoaded" label={to_be_loaded}>
                    <Select defaultValue="">
                        <Option value="">{none}</Option>
                        <Option value="true">{yes}</Option>
                        <Option value="false">{no}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="toBePalletized" label={to_be_palletized}>
                    <Select defaultValue="">
                        <Option value="">{none}</Option>
                        <Option value="true">{yes}</Option>
                        <Option value="false">{no}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="useReceiptNumber" label={use_receipt_number}>
                    <Select defaultValue="">
                        <Option value="">{none}</Option>
                        <Option value="true">{yes}</Option>
                        <Option value="false">{no}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="isVirtual" label={is_virtual}>
                    <Select defaultValue="">
                        <Option value="">{none}</Option>
                        <Option value="true">{yes}</Option>
                        <Option value="false">{no}</Option>
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

CarriersSearch.displayName = 'CarriersSearch';

export { CarriersSearch };
