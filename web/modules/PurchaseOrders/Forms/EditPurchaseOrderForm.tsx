import { FC, useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { StyledForm, WrapperForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    UpdatePurchaseOrderMutation,
    UpdatePurchaseOrderMutationVariables,
    useUpdatePurchaseOrderMutation,

} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { PurchaseOrderForm } from './PurchaseOrderForm';

export interface IEditPurchaseOrderFormProps {
    id: string;
    details: any;
}

interface IOption {
    value: string;
    id: string;
}

export const EditPurchaseOrderForm: FC<IEditPurchaseOrderFormProps> = ({
    id,
    details
}: IEditPurchaseOrderFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [form] = Form.useForm();

    const { mutate, isLoading: updateLoading } = useUpdatePurchaseOrderMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdatePurchaseOrderMutation,
                _variables: UpdatePurchaseOrderMutationVariables,
                _context: any
            ) => {
                router.push(`/purchase-orders/${data.updatePurchaseOrder?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );
    
    const updatePurchaseOrder = ({ id, input }: UpdatePurchaseOrderMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                const formData = JSON.parse(JSON.stringify(form.getFieldsValue(true)));
                delete formData.companyName;
                updatePurchaseOrder({ input: formData, id: id });
            })
            .catch((err) => {
                showError(t('messages:error-creating-data'));
            });
    };

    useEffect(() => {
        const tmp_details = JSON.parse(JSON.stringify(form.getFieldsValue(true)));
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['modified'];
        delete tmp_details['createdBy'];
        delete tmp_details['modifiedBy'];
        delete tmp_details['statusText'];
        delete tmp_details['typeText'];
        
        form.setFieldsValue(tmp_details);
        
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['modified'];
        delete tmp_details['createdBy'];
        delete tmp_details['modifiedBy'];
        delete tmp_details['statusText'];
        delete tmp_details['typeText'];
        form.setFieldsValue(tmp_details);
    }, []);

    

    return (
        <StyledForm>
            <WrapperForm>
                <Form form={form} scrollToFirstError>
                    <PurchaseOrderForm form={form} details={details} id={id} mode={'edit'}/>
                </Form>
                <div style={{ textAlign: 'right' }}>
                    <Space>
                        <Button onClick={() => onFinish()} type="primary">
                            {t('actions:update')}
                        </Button>
                        <Button onClick={() => router.back()}>{t('actions:cancel')}</Button>
                    </Space>
                </div>
            </WrapperForm>
        </StyledForm>
    );
};
