import { FC, useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { StyledForm } from '@components';
import useTranslation from 'next-translate/useTranslation';

import { useRouter } from 'next/router';

import { showError, showSuccess, showInfo, useUpdate } from '@helpers';
import { FormGroup } from 'modules/Crud/submodules/FormGroup';
import { FilterFieldType, ModelType } from 'models/Models';

export interface IEditItemFormProps {
    id: string;
    details: any;
    dataModel: ModelType;
    routeAfterSuccess: string;
    editSteps: Array<Array<FilterFieldType>>;
}

export const EditItemForm: FC<IEditItemFormProps> = (props: IEditItemFormProps) => {
    const { t } = useTranslation();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        isLoading: updateLoading,
        result: updateResult,
        mutate
    } = useUpdate(
        props.dataModel.resolverName,
        props.dataModel.endpoints.update,
        props.dataModel.detailFields
    );

    useEffect(() => {
        if (!(updateResult && updateResult.data)) return;

        if (updateResult.success) {
            router.push(
                props.routeAfterSuccess.replace(
                    ':id',
                    updateResult.data[props.dataModel.endpoints.update]?.id
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

        if (props.editSteps.length > 0) {
            let allFields = props.editSteps[0].map((item) => {
                return item.name;
            });
            for (let i = 1; i < props.editSteps.length; i++) {
                allFields = allFields.concat(
                    props.editSteps[i].map((item) => {
                        return item.name;
                    })
                );
            }

            Object.keys(tmp_details).forEach((key) => {
                if (!allFields.includes(key)) {
                    delete tmp_details[key];
                }
            });
        }

        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <Form form={form} scrollToFirstError>
                {props.editSteps.map((item) => (
                    <FormGroup inputs={item} />
                ))}
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
