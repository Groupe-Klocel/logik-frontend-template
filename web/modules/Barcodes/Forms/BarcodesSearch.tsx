import { Form, Input, Select } from 'antd';
import { SimpleGetAllStockOwnersQuery, useSimpleGetAllStockOwnersQuery } from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

export type BarcodesSearchTypeProps = {
    form: any;
};

const { Option } = Select;

const BarcodesSearch: FC<BarcodesSearchTypeProps> = ({ form }: BarcodesSearchTypeProps) => {
    const { t } = useTranslation();

    const barcode = t('common:barcode');
    const stockOwner = t('d:stockOwner');
    const article = t('common:article');
    const [stockOwners, setStockOwners] = useState<any>();
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
                <Form.Item name="stockOwnerId" label={stockOwner}>
                    <Select>
                        <Option value=""> </Option>
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item name="barcode" label={barcode}>
                    <Input />
                </Form.Item>
                <Form.Item name="article" label={article}>
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

BarcodesSearch.displayName = 'BarcodesSearch';

export { BarcodesSearch };
