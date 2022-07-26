import { FC, useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { StyledForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';

import { showError, showSuccess, showInfo, useUpdate } from '@helpers';
import { FormGroup } from 'modules/Crud/Components/FormGroup';
import { FormDataType, ModelType } from 'modules/Crud/Models';

export interface IEditItemFormProps {
    id: string;
    details: any;
    dataModel: ModelType;
    routeAfterSuccess: string;
}

export const EditItemForm: FC<IEditItemFormProps> = (props: IEditItemFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        isLoading: updateLoading,
        result: updateResult,
        mutate
    } = useUpdate(
        props.dataModel.resolverName,
        props.id,
        props.dataModel.updateQueryName,
        props.dataModel.detailColumns
    );

    useEffect(() => {
        if (!(updateResult && updateResult.data)) return;

        if (updateResult.success) {
            router.push(
                props.routeAfterSuccess.replace(
                    ':id',
                    updateResult.data[props.dataModel.updateQueryName]?.id
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

    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    const formFields1 = [
        {
            name: 'name',
            type: FormDataType.String,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        { name: 'additionalDescription', type: FormDataType.TextArea },
        { name: 'supplierName', type: FormDataType.String },
        {
            name: 'status',
            type: FormDataType.Number,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'code',
            type: FormDataType.String,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'stockOwnerId',
            type: FormDataType.String,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        }
    ];
    const formFields2 = [
        {
            name: 'length',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'width',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'height',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'baseUnitWeight',
            type: FormDataType.Number,
            numberPrecision: 2,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'baseUnitPicking',
            type: FormDataType.Boolean
        },
        {
            name: 'cubingType',
            type: FormDataType.Number,
            rules: [{ required: true, message: errorMessageEmptyInput }]
        },
        {
            name: 'baseUnitPrice',
            type: FormDataType.Number
        },
        {
            name: 'baseUnitRotation',
            type: FormDataType.String
        },
        {
            name: 'boxRotation',
            type: FormDataType.String
        }
    ];

    const formFields3 = [
        {
            name: 'family',
            type: FormDataType.String
        },
        {
            name: 'subfamily',
            type: FormDataType.String
        },
        {
            name: 'tariffClassification',
            type: FormDataType.String
        },
        {
            name: 'groupingId',
            type: FormDataType.Number
        },
        {
            name: 'featureTypeId',
            type: FormDataType.Number
        },
        {
            name: 'permanentProduct',
            type: FormDataType.Boolean
        }
    ];

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
