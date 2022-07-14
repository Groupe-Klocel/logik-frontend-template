import { Form, Input, Select } from 'antd';
import { useAuth } from 'context/AuthContext';
import { ListConfigsForAScopeQuery, useListConfigsForAScopeQuery } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState, useEffect } from 'react';

const { Option } = Select;
export interface IPatternPathsSearchProps {
    form: any;
}

const PatternPathsSearch: FC<IPatternPathsSearchProps> = ({ form }: IPatternPathsSearchProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();
    const [statusTexts, setTypeTexts] = useState<any>();

    const statusTextList = useListConfigsForAScopeQuery<ListConfigsForAScopeQuery, Error>(
        graphqlRequestClient,
        {
            scope: 'pattern_path_status'
        }
    )

    useEffect(()=> {
        if (statusTextList) {
            setTypeTexts(statusTextList?.data?.listConfigsForAScope);
        }
    }, [statusTextList])

    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="name" label={t('common:name')}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t("common:status")}
                    name="status"
                >
                    <Select>
                        {statusTexts?.map((type: any) => (
                            <Option key={type.code} value={type.code}>
                                {type.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </>
    );
};

PatternPathsSearch.displayName = 'PatternPathsSearch';

export { PatternPathsSearch };
