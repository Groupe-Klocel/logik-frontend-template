import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreatePurchaseOrderLineMutation,
    CreatePurchaseOrderLineMutation,
    CreatePurchaseOrderLineMutationVariables
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
} from '@helpers';
import { PurchaseOrderLineForm } from './PurchaseOrderLineForm';

export const AddPurchaseOrderLineForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreatePurchaseOrderLineMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreatePurchaseOrderLineMutation,
                _variables: CreatePurchaseOrderLineMutationVariables,
                _context: any
            ) => {
                // router.push(`/barcode/${data.createBarcode.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );
    
    const createPurchaseLine = ({ input }: CreatePurchaseOrderLineMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        console.log(form.getFieldsValue(true));
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
                delete formData.articleName;
                delete formData.purchaseOrderName;
                delete formData.companyName;
                createPurchaseLine({ input: formData });
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
                <PurchaseOrderLineForm companyId={"sdf"} purchaseOrderId={"test"} form={form}/>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
