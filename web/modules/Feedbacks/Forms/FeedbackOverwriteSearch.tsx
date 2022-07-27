import { Form, Input, InputNumber, Select } from 'antd';
import {
    GetFeedbackOverwriteMovementCodeParamsQuery,
    SimpleGetAllStockOwnersQuery,
    useGetFeedbackOverwriteMovementCodeParamsQuery,
    useSimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type FeedbackOverwritesSearchProps = {
    form: any;
};

//FIXME: finalize search include list of movement codes
const FeedbackOverwritesSearch: FC<FeedbackOverwritesSearchProps> = ({
    form
}: FeedbackOverwritesSearchProps) => {
    const { t } = useTranslation();

    const [stockOwners, setStockOwners] = useState<any>();
    const [movementCodes, setMovementCodes] = useState<any>();

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

    //To render movement codes from parameter table for the given scope
    const movementCodesList = useGetFeedbackOverwriteMovementCodeParamsQuery<
        Partial<GetFeedbackOverwriteMovementCodeParamsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (movementCodesList) {
            setMovementCodes(movementCodesList?.data?.listParametersForAScope);
        }
    }, [movementCodesList]);

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
                <Form.Item label={t('common:movement-code')} name="movementCode">
                    <Select>
                        <Option value=""> </Option>
                        {movementCodes?.map((movementCode: any) => (
                            <Option key={movementCode.id} value={parseInt(movementCode.code)}>
                                {movementCode.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item name="feedback" label={t('common:feedback')}>
                    <Select>
                        <Option value=""> </Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="custom-value" label={t('common:custom-value')}>
                    <Input />
                </Form.Item>
                <Form.Item name="system" label={t('d:system')}>
                    <Select>
                        <Option value=""> </Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

FeedbackOverwritesSearch.displayName = 'FeedbackOverwritesSearch';

export { FeedbackOverwritesSearch };
