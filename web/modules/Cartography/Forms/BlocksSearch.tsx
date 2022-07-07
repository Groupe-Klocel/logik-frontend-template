import { Form, Input, InputNumber, Checkbox, Select } from 'antd';
import {
    GetBlockLevelsParamsQuery,
    SimpleGetAllBuildingsQuery,
    useGetBlockLevelsParamsQuery,
    useSimpleGetAllBuildingsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const { Option } = Select;

export type BlocksSearchProps = {
    form: any;
};

const BlocksSearch: FC<BlocksSearchProps> = ({ form }: BlocksSearchProps) => {
    const { t } = useTranslation();

    const [blockLevels, setBlockLevels] = useState<any>();
    const [buildings, setBuildings] = useState<any>();

    //To render block Levels from parameter table for the given scope
    const blockLevelsList = useGetBlockLevelsParamsQuery<Partial<GetBlockLevelsParamsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (blockLevelsList) {
            setBlockLevels(blockLevelsList?.data?.listParametersForAScope);
        }
    }, [blockLevelsList]);

    //To render Simple builgings list
    const buildingList = useSimpleGetAllBuildingsQuery<Partial<SimpleGetAllBuildingsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (buildingList) {
            setBuildings(buildingList?.data?.buildings?.results);
        }
    }, [buildingList]);

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="buildingId" label={t('d:building')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        {buildings?.map((building: any) => (
                            <Option key={building.id} value={building.id}>
                                {building.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="moveable" label={t('d:moveable')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                    {/* <Checkbox>{t("d:moveable")}</Checkbox> */}
                </Form.Item>
                <Form.Item name="bulk" label={t('d:bulk')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        <Option value="true">{t('common:bool-yes')}</Option>
                        <Option value="false">{t('common:bool-no')}</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="level" label={t('d:level')}>
                    <Select defaultValue="">
                        <Option value="">{t('common:none')}</Option>
                        {blockLevels?.map((blockLevel: any) => (
                            <Option key={blockLevel.id} value={blockLevel.code}>
                                {blockLevel.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label={t('d:blockGroup')} name="blockGroup">
                    <InputNumber min={0} max={10} defaultValue={0} />
                </Form.Item>
            </Form>
        </>
    );
};

BlocksSearch.displayName = 'BlocksSearch';

export { BlocksSearch };
