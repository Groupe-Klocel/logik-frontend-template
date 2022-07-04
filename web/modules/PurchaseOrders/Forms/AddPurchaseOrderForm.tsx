import { WrapperForm } from '@components';
import { Button, Form, } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreatePurchaseOrderMutation,
    CreatePurchaseOrderMutation,
    CreatePurchaseOrderMutationVariables
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
} from '@helpers';
import { PurchaseOrderForm } from './PurchaseOrderForm';

export const AddPurchaseOrderForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreatePurchaseOrderMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreatePurchaseOrderMutation,
                _variables: CreatePurchaseOrderMutationVariables,
                _context: any
            ) => {
                router.push(`/purchase-orders/${data.createPurchaseOrder.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );
    
    const createPurchaseLine = ({ input }: CreatePurchaseOrderMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        console.log(form.getFieldsValue(true));
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
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
                <PurchaseOrderForm form={form}/>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};