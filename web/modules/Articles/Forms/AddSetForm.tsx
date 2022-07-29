import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useAuth } from 'context/AuthContext';
import {
    CreateArticleSetMutation,
    CreateArticleSetMutationVariables,
    SimpleGetAllArticlesQuery,
    SimpleGetInProgressStockOwnersQuery,
    useCreateArticleSetMutation,
    useSimpleGetAllArticlesQuery,
    useSimpleGetInProgressStockOwnersQuery
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddArticleSetForm = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [stockOwners, setStockOwners] = useState<any>();
    const [articles, setArticles] = useState<any>();
    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateArticleSetMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateArticleSetMutation,
                _variables: CreateArticleSetMutationVariables,
                _context: any
            ) => {
                router.push(`/set/${data.createArticleSet.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createArticleSet = ({ input }: CreateArticleSetMutationVariables) => {
        mutate({ input });
    };

    //To render Simple stock owners list
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

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                createArticleSet({ input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-creating-data'));
            });
    };

    useEffect(() => {
        if (createLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [createLoading]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('common:stockOwner')}
                    name="stockOwnerId"
                    hasFeedback
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:stockOwner')
                        })}`}
                    >
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('name')}
                    name="name"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('common:articles')}
                    name="articleId"
                    hasFeedback
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Select
                        filterOption={(inputValue, option) =>
                            option!.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        showSearch
                    >
                        {articles?.map((article: any) => (
                            <Option key={article.id} value={article.id}>
                                {article.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label={t('common:comment')} name="comment">
                    <TextArea />
                </Form.Item>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {t('actions:submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
