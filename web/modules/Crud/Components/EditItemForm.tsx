import { FC, useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { StyledForm } from '@components';
import useTranslation from 'next-translate/useTranslation';

import { useRouter } from 'next/router';

import { showError, showSuccess, showInfo, useUpdate } from '@helpers';
import { FormGroup } from 'modules/Crud/Components/FormGroup';
import { ModelType } from 'models/Models';
import { formStep1, formStep2, formStep3 } from '../ArticleFormItems';

export interface IEditItemFormProps {
    id: string;
    details: any;
    dataModel: ModelType;
    routeAfterSuccess: string;
}

export const EditItemForm: FC<IEditItemFormProps> = (props: IEditItemFormProps) => {
    const { t } = useTranslation();
    const router = useRouter();

    const [form] = Form.useForm();

    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    const formFields1 = formStep1(errorMessageEmptyInput);
    const formFields2 = formStep2(errorMessageEmptyInput);
    const formFields3 = formStep3(errorMessageEmptyInput);

    const {
        isLoading: updateLoading,
        result: updateResult,
        mutate
    } = useUpdate(
        props.dataModel.resolverName,
        props.id,
        props.dataModel.queryNames.update,
        props.dataModel.detailColumns
    );

    useEffect(() => {
        if (!(updateResult && updateResult.data)) return;

        if (updateResult.success) {
            router.push(
                props.routeAfterSuccess.replace(
                    ':id',
                    updateResult.data[props.dataModel.queryNames.update]?.id
                )
            );
            showSuccess(t('messages:success-updated'));
        } else {
            showError(t('messages:error-update-data'));
        }
    }, [updateResult]);

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                mutate({
                    id: props.id,
                    input: { ...form.getFieldsValue(true) }
                });
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };

    useEffect(() => {
        const tmp_details = { ...props.details };

        let allFields = formFields1.map((item) => {
            return item.name;
        });
        allFields = allFields.concat(
            formFields2.map((item) => {
                return item.name;
            })
        );
        allFields = allFields.concat(
            formFields3.map((item) => {
                return item.name;
            })
        );

        Object.keys(tmp_details).forEach((key) => {
            if (!allFields.includes(key)) {
                delete tmp_details[key];
            }
        });

        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <Form form={form} scrollToFirstError>
                <FormGroup inputs={formFields1} />
                <FormGroup inputs={formFields2} />
                <FormGroup inputs={formFields3} />
                <div style={{ textAlign: 'right' }}>
                    <Space>
                        <Button onClick={() => onFinish()} type="primary">
                            {t('actions:update')}
                        </Button>
                        <Button onClick={() => router.back()}>{t('actions:cancel')}</Button>
                    </Space>
                </div>
            </Form>
        </StyledForm>
    );
};
