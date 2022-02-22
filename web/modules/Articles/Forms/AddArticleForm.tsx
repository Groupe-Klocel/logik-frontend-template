import { FC, useState } from 'react';
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
import { showError, showSuccess, showInfo} from '@helpers';

const { Item } = Form;

export interface IAddArticleFormProps {}

export const AddArticleForm: FC<IAddArticleFormProps> = ({}: IAddArticleFormProps) => {
    let { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();

    const handleClickNext = () => {
        console.log('pass');
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
            if(createLoading){
                showInfo(t('messages:info-creating-wip'));
            }
            if (!createLoading) {
                router.push(`/article/${data.createArticle.id}`);
                showSuccess(t('messages:success-created'));
            }
        },
        onError: (error) => {
            showError(t('messages:error-creating-data'));
        }
    });

    const createArticle = ({ input }: CreateArticleMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        console.log('pass2');
        form.validateFields()
            .then(() => {
                console.log(form.getFieldsValue(true));
                createArticle({ input: form.getFieldsValue(true) });
            })
            .catch((err) => console.log(err));
    };

    const steps = [
        {
            title: `${t('forms:step')} 1`,
            key: 0
        },
        {
            title: `${t('forms:step')} 2`,
            key: 1
        },
        {
            title: `${t('forms:step')} 3`,
            key: 2
        }
    ];

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
