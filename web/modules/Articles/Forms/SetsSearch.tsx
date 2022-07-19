import { Form, Input, InputNumber, Select } from 'antd';
import { SimpleGetAllStockOwnersQuery, useSimpleGetAllStockOwnersQuery } from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type SetsSearchProps = {
    form: any;
};

//FIXME: finalize search include list of movement codes
const SetsSearch: FC<SetsSearchProps> = ({ form }: SetsSearchProps) => {
    const { t } = useTranslation();

    const [stockOwners, setStockOwners] = useState<any>();

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
            </Form>
        </>
    );
};

SetsSearch.displayName = 'SetsSearch';

export { SetsSearch };
