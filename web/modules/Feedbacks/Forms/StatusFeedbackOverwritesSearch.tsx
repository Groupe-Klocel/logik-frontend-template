import { Form, Input, InputNumber, Select } from 'antd';
import {
    GetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    GetStatusFeedbackOverwriteStatusConfigsQuery,
    SimpleGetAllStockOwnersQuery,
    useGetStatusFeedbackOverwriteObjectTypeConfigsQuery,
    useGetStatusFeedbackOverwriteStatusConfigsQuery,
    useSimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type StatusFeedbackOverwritesSearchProps = {
    form: any;
};

const StatusFeedbackOverwritesSearch: FC<StatusFeedbackOverwritesSearchProps> = ({
    form
}: StatusFeedbackOverwritesSearchProps) => {
    const { t } = useTranslation();

    const [statusFeedbackOverwriteStatus, setStatusFeedbackOverwriteStatus] = useState<any>();
    const [statusFeedbackOverwriteObjectType, setStatusFeedbackOverwriteObjectType] =
        useState<any>();
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

    //To render statusFeedbackOverwrites statuses from config table for the given scope
    const statusFeedbackOverwriteStatusList = useGetStatusFeedbackOverwriteStatusConfigsQuery<
        Partial<GetStatusFeedbackOverwriteStatusConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteStatusList) {
            setStatusFeedbackOverwriteStatus(
                statusFeedbackOverwriteStatusList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteStatusList]);

    //To render statusFeedbackOverwrites object-types from config table for the given scope
    const statusFeedbackOverwriteObjectTypeList =
        useGetStatusFeedbackOverwriteObjectTypeConfigsQuery<
            Partial<GetStatusFeedbackOverwriteObjectTypeConfigsQuery>,
            Error
        >(graphqlRequestClient);

    useEffect(() => {
        if (statusFeedbackOverwriteObjectTypeList) {
            setStatusFeedbackOverwriteObjectType(
                statusFeedbackOverwriteObjectTypeList?.data?.listConfigsForAScope
            );
        }
    }, [statusFeedbackOverwriteObjectTypeList]);

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="stockOwnerId" label={t('common:stock-owner')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label={t('common:object-type')} name="object-type">
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:object-type')
                        })}`}
                    >
                        <Option value="">{t('common:none')}</Option>
                        {statusFeedbackOverwriteObjectType?.map(
                            (statusFeedbackOverwriteObjectType: any) => (
                                <Option
                                    key={statusFeedbackOverwriteObjectType.id}
                                    value={parseInt(statusFeedbackOverwriteObjectType.code)}
                                >
                                    {statusFeedbackOverwriteObjectType.text}
                                </Option>
                            )
                        )}
                    </Select>
                </Form.Item>
                <Form.Item label={t('common:status-code')} name="status">
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:status-code')
                        })}`}
                    >
                        <Option value="">{t('common:none')}</Option>
                        {statusFeedbackOverwriteStatus?.map(
                            (statusFeedbackOverwriteStatus: any) => (
                                <Option
                                    key={statusFeedbackOverwriteStatus.id}
                                    value={parseInt(statusFeedbackOverwriteStatus.code)}
                                >
                                    {statusFeedbackOverwriteStatus.text}
                                </Option>
                            )
                        )}
                    </Select>
                </Form.Item>
                <Form.Item name="feedback" label={t('common:feedback')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="custom-value" label={t('common:custom-value')}>
                    <Input />
                </Form.Item>
                <Form.Item name="system" label={t('d:system')}>
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

StatusFeedbackOverwritesSearch.displayName = 'StatusFeedbackOverwritesSearch';

export { StatusFeedbackOverwritesSearch };
