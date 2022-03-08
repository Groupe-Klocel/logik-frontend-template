import { useState, useEffect } from 'react';
import { Form, Button, Space } from 'antd';
import { WrapperForm, StepsPanel, WrapperStepContent } from '@components';
import { AddArticleStep1 } from './Steps/AddArticleStep1';
import { AddArticleStep2 } from './Steps/AddArticleStep2';
import { AddArticleStep3 } from './Steps/AddArticleStep3';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreateArticleMutation,
    CreateArticleMutation,
    CreateArticleMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

const { Item } = Form;

export const AddArticleForm = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();

    const handleClickNext = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                setCurrent(current + 1);
            })
            .catch((err) => console.log(err));
    };

    const handleClickBack = () => {
        setCurrent(current - 1);
    };

    const {
        mutate,
        isLoading: createLoading,
        data
    } = useCreateArticleMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: CreateArticleMutation,
            _variables: CreateArticleMutationVariables,
            _context: unknown
        ) => {
            router.push(`/article/${data.createArticle.id}`);
            showSuccess(t('messages:success-created'));
        },
        onError: (error) => {
            showError(t('messages:error-creating-data'));
        }
    });

    const createArticle = ({ input }: CreateArticleMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                createArticle({ input: { ...form.getFieldsValue(true), accountId: 1 } });
            })
            .catch((err) => showError(t('messages:error-creating-data')));
    };

    const steps = [
        {
            title: `${t('common:step')} 1`,
            key: 0
        },
        {
            title: `${t('common:step')} 2`,
            key: 1
        },
        {
            title: `${t('common:step')} 3`,
            key: 2
        }
    ];

    useEffect(() => {
        if (createLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [createLoading]);

    return (
        <WrapperForm>
            <StepsPanel currentStep={current} steps={steps} />
            <WrapperStepContent>
                <Form form={form} scrollToFirstError>
                    {current === 0 && <AddArticleStep1 />}

                    {current === 1 && <AddArticleStep2 />}

                    {current === 2 && <AddArticleStep3 />}
                </Form>
            </WrapperStepContent>
            {current === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <Button onClick={handleClickNext}>{t('actions:next-step')}</Button>
                </div>
            ) : current > 0 && current < steps.length - 1 ? (
                <div style={{ textAlign: 'center' }}>
                    <Space>
                        <Button onClick={handleClickBack}>{t('actions:back-step')}</Button>
                        <Button onClick={handleClickNext}>{t('actions:next-step')}</Button>
                    </Space>
                </div>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <Space>
                        <Button onClick={handleClickBack}>{t('actions:back-step')}</Button>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {t('actions:submit')}
                        </Button>
                    </Space>
                </div>
            )}
        </WrapperForm>
    );
};
