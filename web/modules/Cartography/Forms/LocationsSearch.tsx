import { Form, Input, Checkbox, Select } from 'antd';
import { SimpleGetAllBLocksQuery, useSimpleGetAllBLocksQuery } from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type LocationsSearchProps = {
    form: any;
};

const LocationsSearch: FC<LocationsSearchProps> = ({ form }: LocationsSearchProps) => {
    const { t } = useTranslation();
    const [blocks, setBlocks] = useState<any>();

    //To render simple blocks list for attached block selection (id and name without any filter)
    const blocksList = useSimpleGetAllBLocksQuery<Partial<SimpleGetAllBLocksQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (blocksList) {
            setBlocks(blocksList?.data?.blocks?.results);
        }
    }, [blocksList]);

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="blockId" label={t('d:block')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        {blocks?.map((block: any) => (
                            <Option key={block.id} value={block.id}>
                                {block.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item name="aisle" label={t('d:aisle')}>
                    <Input />
                </Form.Item>
                <Form.Item name="column" label={t('common:column')}>
                    <Input />
                </Form.Item>
                <Form.Item name="level" label={t('d:level')}>
                    <Input />
                </Form.Item>
                <Form.Item name="position" label={t('d:position')}>
                    <Input />
                </Form.Item>
                <Form.Item name="replenish" label={t('d:replenish')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item label={t('d:constraint')} name="constraint">
                    <Input />
                </Form.Item>
            </Form>
        </>
    );
};

LocationsSearch.displayName = 'LocationsSearch';

export { LocationsSearch };
