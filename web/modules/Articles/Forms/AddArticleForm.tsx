import { FC, useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { WrapperForm, StepsPanel, WrapperStepContent } from '@components';
import { AddArticleStep1 } from './Steps/AddArticleStep1';
import { AddArticleStep2 } from './Steps/AddArticleStep2';
import { AddArticleStep3 } from './Steps/AddArticleStep3';
import useTranslation from 'next-translate/useTranslation';

const { Item } = Form;

export interface IAddArticleFormProps {}

export const AddArticleForm: FC<IAddArticleFormProps> = ({}: IAddArticleFormProps) => {
    let { t } = useTranslation();

    // TYPED SAFE ALL
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

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                console.log(form.getFieldsValue(true));
                alert(JSON.stringify(form.getFieldsValue(true), null, 4));
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
                <Form form={form} onFinish={onFinish} scrollToFirstError>
                    {current === 0 && <AddArticleStep1 />}

                    {current === 1 && <AddArticleStep2 />}

                    {current === 2 && <AddArticleStep3 />}

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
                                <Button type="primary" htmlType="submit">
                                    {t('actions:submit')}
                                </Button>
                            </Space>
                        </div>
                    )}
                </Form>
            </WrapperStepContent>
        </WrapperForm>
    );
};
