import { WrapperForm } from '@components';
import { Button, Input, Form, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateArticleSetMutation,
    UpdateArticleSetMutation,
    UpdateArticleSetMutationVariables,
    useSimpleGetAllArticlesQuery,
    SimpleGetAllArticlesQuery
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

export type EditArticleSetFormProps = {
    articleSetId: string;
    details: any;
};

export const EditArticleSetForm: FC<EditArticleSetFormProps> = ({
    articleSetId,
    details
}: EditArticleSetFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [articles, setArticles] = useState<any>();

    //To render Simple articles list
    const articleList = useSimpleGetAllArticlesQuery<Partial<SimpleGetAllArticlesQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (articleList) {
            setArticles(articleList?.data?.articles?.results);
        }
    }, [articleList]);

    const { mutate, isLoading: updateLoading } = useUpdateArticleSetMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateArticleSetMutation,
                _variables: UpdateArticleSetMutationVariables,
                _context: any
            ) => {
                router.push(`/set/${data.updateArticleSet?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateArticleSet = ({ id, input }: UpdateArticleSetMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['associatedStockOwner'];
                delete formData['stockOwner'];
                delete formData['associatedArticle'];
                delete formData['article'];
                updateArticleSet({ id: articleSetId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedStockOwner: details.stockOwner.name,
            associatedArticle: details.article.name
        };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['createdBy'];
        delete tmp_details['modified'];
        delete tmp_details['modifiedBy'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [updateLoading]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('common:stockOwner')}
                    name="associatedStockOwner"
                    hasFeedback
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label={t('common:name')}
                    name="name"
                    rules={[{ required: true, message: t('messages:error-message-empty-input') }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('common:articles')}
                    name="associatedArticle"
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
                        // onSearch={handleSearch}
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
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
