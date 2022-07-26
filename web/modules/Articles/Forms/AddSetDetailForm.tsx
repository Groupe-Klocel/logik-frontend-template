import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import {
    CreateArticleSetDetailMutation,
    CreateArticleSetDetailMutationVariables,
    GetArticleSetByIdQuery,
    SimpleGetAllArticlesQuery,
    useCreateArticleSetDetailMutation,
    useGetArticleSetByIdQuery,
    useSimpleGetAllArticlesQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddArticleSetDetailForm = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;
    const [articles, setArticles] = useState<any>();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    //to recover articleSet information for pre-filling
    const articleSetById = useGetArticleSetByIdQuery<GetArticleSetByIdQuery, Error>(
        graphqlRequestClient,
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            id
        }
    );

    useEffect(() => {
        if (articleSetById) {
            const formData = form.getFieldsValue(true);
            formData['articleSetId'] = id;
            formData['associatedArticleSet'] = articleSetById?.data?.articleSet?.name;
            formData['stockOwnerId'] = articleSetById?.data?.articleSet?.stockOwnerId;
            formData['associatedStockOwner'] = articleSetById?.data?.articleSet?.stockOwner.name;
        }
    }, [articleSetById]);

    //To render Simple articles list
    const articleList = useSimpleGetAllArticlesQuery<Partial<SimpleGetAllArticlesQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (articleList) {
            setArticles(articleList?.data?.articles?.results);
        }
    }, [articleList]);

    const { mutate, isLoading: createLoading } = useCreateArticleSetDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateArticleSetDetailMutation,
                _variables: CreateArticleSetDetailMutationVariables,
                _context: any
            ) => {
                router.push(`/set/${id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createArticleSetDetail = ({ input }: CreateArticleSetDetailMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['associatedArticleSet'];
                delete formData['associatedStockOwner'];
                createArticleSetDetail({ input: formData });
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
                    label={t('menu:article-set')}
                    name="associatedArticleSet"
                    rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label={t('common:stockOwner')}
                    name="associatedStockOwner"
                    rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label={t('common:article')}
                    name="articleId"
                    hasFeedback
                    rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-an', {
                            name: t('common:article')
                        })}`}
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
                <Form.Item label={t('d:quantity')} name="quantity">
                    <InputNumber />
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
