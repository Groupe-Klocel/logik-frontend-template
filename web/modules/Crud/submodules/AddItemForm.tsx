import { useState, useEffect, FC } from 'react';
import { Form, Button, Space } from 'antd';
import { WrapperForm, StepsPanel, WrapperStepContent } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { showError, showSuccess, showInfo, useCreate } from '@helpers';
import { FilterFieldType, ModelType } from 'models/Models';
import { FormGroup } from './FormGroup';

export interface IAddItemFormProps {
    dataModel: ModelType;
    addSteps: Array<Array<FilterFieldType>>;
    routeAfterSuccess: string;
}

export const AddItemForm: FC<IAddItemFormProps> = (props: IAddItemFormProps) => {
    const { t } = useTranslation();
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
        isLoading: createLoading,
        result: createResult,
        mutate
    } = useCreate(
        props.dataModel.resolverName,
        props.dataModel.endpoints.create,
        props.dataModel.detailFields
    );

    useEffect(() => {
        if (!(createResult && createResult.data)) return;

        if (createResult.success) {
            router.push(
                props.routeAfterSuccess.replace(
                    ':id',
                    createResult.data[props.dataModel.endpoints.create]?.id
                )
            );
            showSuccess(t('messages:success-created'));
        } else {
            showError(t('messages:error-creating-data'));
        }
    }, [createResult]);

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                mutate({
                    input: { ...form.getFieldsValue(true) }
                });
            })
            .catch((err) => showError(t('messages:error-creating-data')));
    };

    const steps = props.addSteps.map((element, index) => {
        return {
            title: `${t('common:step')} ` + (index + 1).toString(),
            key: index
        };
    });

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
                    <FormGroup inputs={props.addSteps[current]} />
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
