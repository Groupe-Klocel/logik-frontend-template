import { Form, Input, InputNumber, Select } from 'antd';
import { SimpleGetAllStockOwnersQuery, useSimpleGetAllStockOwnersQuery } from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type FeatureCodesSearchProps = {
    form: any;
};

const FeatureCodesSearch: FC<FeatureCodesSearchProps> = ({ form }: FeatureCodesSearchProps) => {
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
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="unique" label={t('common:unique')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="dateType" label={t('d:dateType')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

FeatureCodesSearch.displayName = 'FeatureCodesSearch';

export { FeatureCodesSearch };
