import { Form, Input, InputNumber, Select } from 'antd';
import { GetBuildingStatusConfigsQuery, useGetBuildingStatusConfigsQuery } from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type BuildingsSearchProps = {
    form: any;
};

//FIXME: finalize search include list of movement codes
const BuildingsSearch: FC<BuildingsSearchProps> = ({ form }: BuildingsSearchProps) => {
    const { t } = useTranslation();

    const [statuses, setStatuses] = useState<any>();

    //To render statuses from parameter table for the given scope
    const statusesList = useGetBuildingStatusConfigsQuery<
        Partial<GetBuildingStatusConfigsQuery>,
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
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="address1" label={t('common:address1')}>
                    <Input />
                </Form.Item>
                <Form.Item name="postCode" label={t('common:post-code')}>
                    <Input />
                </Form.Item>
                <Form.Item name="city" label={t('common:city')}>
                    <Input />
                </Form.Item>
                <Form.Item name="country" label={t('common:country')}>
                    <Input />
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

BuildingsSearch.displayName = 'BuildingsSearch';

export { BuildingsSearch };
