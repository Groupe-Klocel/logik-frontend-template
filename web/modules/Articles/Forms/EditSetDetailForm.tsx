import { WrapperForm } from '@components';
import { Button, Input, Form, Select, InputNumber } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import {
    SimpleGetAllArticlesQuery,
    UpdateArticleSetDetailMutation,
    UpdateArticleSetDetailMutationVariables,
    useSimpleGetAllArticlesQuery,
    useUpdateArticleSetDetailMutation
} from 'generated/graphql';

const { Option } = Select;

export type EditArticleSetDetailFormProps = {
    articleSetDetailId: string;
    details: any;
};

//FIXME: next step is to add fields to the form
export const EditArticleSetDetailForm: FC<EditArticleSetDetailFormProps> = ({
    articleSetDetailId,
    details
}: EditArticleSetDetailFormProps) => {
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

    const { mutate, isLoading: updateLoading } = useUpdateArticleSetDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateArticleSetDetailMutation,
                _variables: UpdateArticleSetDetailMutationVariables,
                _context: any
            ) => {
                router.push(`/set/detail/${data.updateArticleSetDetail?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateArticleSetDetail = ({ id, input }: UpdateArticleSetDetailMutationVariables) => {
        mutate({ id, input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                console.log('zzz', formData);
                delete formData['associatedStockOwner'];
                delete formData['associatedArticleSet'];
                delete formData['articleSet'];
                delete formData['stockOwner'];
                delete formData['article'];
                updateArticleSetDetail({ id: articleSetDetailId, input: formData });
            })
            .catch((err) => {
                showError(t('error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedStockOwner: details.stockOwner.name,
            associatedArticleSet: details.articleSet.name
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
                <Form.Item label={t('common:stockOwner')} name="associatedStockOwner">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item label={t('menu:article-set')} name="associatedArticleSet">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item label={t('common:article')} name="articleId" hasFeedback>
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
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
