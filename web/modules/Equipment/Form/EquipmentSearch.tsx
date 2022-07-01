import { Form, Input, InputNumber, Select } from 'antd';
import {
    GetEquipmentStatusesConfigsQuery,
    SimpleGetAllStockOwnersQuery,
    useGetEquipmentStatusesConfigsQuery,
    useSimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type EquipmentSearchProps = {
    form: any;
};

//FIXME: finalize search include list of movement codes
const EquipmentSearch: FC<EquipmentSearchProps> = ({ form }: EquipmentSearchProps) => {
    const { t } = useTranslation();

    const [stockOwners, setStockOwners] = useState<any>();
    const [statuses, setStatuses] = useState<any>();

    //To render Simple stockOwners list
    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    //To render status from config table for the given scope
    const statusesList = useGetEquipmentStatusesConfigsQuery<
        Partial<GetEquipmentStatusesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (statusesList) {
            setStatuses(statusesList?.data?.listConfigsForAScope);
        }
    }, [statusesList]);

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="stockOwnerId" label={t('common:stock-owner')}>
                    <Select>
                        <Option value=""> </Option>
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label={t('common:status')} name="status">
                    <Select>
                        <Option value=""> </Option>
                        {statuses?.map((status: any) => (
                            <Option key={status.id} value={parseInt(status.code)}>
                                {status.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

EquipmentSearch.displayName = 'EquipmentSearch';

export { EquipmentSearch };
