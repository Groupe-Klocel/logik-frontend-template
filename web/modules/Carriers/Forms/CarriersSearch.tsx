import { Checkbox, Form, Input, Select } from 'antd';
import {
    GetCarriersStatusesConfigsQuery,
    useGetCarriersStatusesConfigsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

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
    const to_be_loaded = t('d:toBeLoaded');
    const to_be_palletized = t('d:toBePalletized');
    const use_receipt_number = t('d:useReceiptNumber');
    const parent_carrier = t('d:parentCarrierId');
    const is_virtual = t('d:isVirtual');
    const mono_round_group = t('d:monoroundgroup');
    const status = t('d:status');
    const none = t('common:none');
    const yes = t('common:bool-yes');
    const no = t('common:bool-no');

    const [carrierStatuses, setCarrierStatuses] = useState<any>();

    //To render carriers statuses from config table for the given scope
    const carrierStatusesList = useGetCarriersStatusesConfigsQuery<
        Partial<GetCarriersStatusesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (carrierStatusesList) {
            setCarrierStatuses(carrierStatusesList?.data?.listConfigsForAScope);
        }
    }, [carrierStatusesList]);

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
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        {carrierStatuses?.map((carrierStatus: any) => (
                            <Option key={carrierStatus.id} value={parseInt(carrierStatus.code)}>
                                {carrierStatus.text}
                            </Option>
                        ))}
                    </Select>
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
                <Form.Item name="monoroundgroup" label={mono_round_group}>
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
