import { Form, Input, InputNumber, Select } from 'antd';
import {
    SimpleGetAllArticlesQuery,
    SimpleGetInProgressStockOwnersQuery,
    useSimpleGetAllArticlesQuery,
    useSimpleGetInProgressStockOwnersQuery
} from 'generated/graphql';
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
    const [articles, setArticles] = useState<any>();

    //To render Simple stockOwners list
    const stockOwnerList = useSimpleGetInProgressStockOwnersQuery<
        Partial<SimpleGetInProgressStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    //To render Simple articles list
    const articleList = useSimpleGetAllArticlesQuery<Partial<SimpleGetAllArticlesQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (articleList) {
            setArticles(articleList?.data?.articles?.results);
        }
    }, [articleList]);
    return (
        <>
            <Form form={form} name="control-hooks">
                <Form.Item name="stockOwnerId" label={t('common:stockOwner')}>
                    <Select>
                        <Option value=""> </Option>
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label={t('name')} name="name">
                    <Input />
                </Form.Item>
                <Form.Item label={t('common:articles')} name="articleId">
                    <Select
                        filterOption={(inputValue, option) =>
                            option!.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        showSearch
                    >
                        <Option value=""> </Option>
                        {articles?.map((article: any) => (
                            <Option key={article.id} value={article.id}>
                                {article.name}
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
