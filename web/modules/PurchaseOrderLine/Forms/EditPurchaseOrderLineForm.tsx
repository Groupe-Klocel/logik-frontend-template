import { FC, useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { StyledForm } from '@components';

import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdatePurchaseOrderLineMutation,
    UpdatePurchaseOrderLineMutation,
    UpdatePurchaseOrderLineMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { PurchaseOrderLineForm } from './PurchaseOrderLineForm';

export interface IEditPurchaseOrderLineFormProps {
    id: string;
    details: any;
}

export const EditPurchaseOrderLineForm: FC<IEditPurchaseOrderLineFormProps> = ({
    id,
    details
}: IEditPurchaseOrderLineFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdatePurchaseOrderLineMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdatePurchaseOrderLineMutation,
            _variables: UpdatePurchaseOrderLineMutationVariables,
            _context: any
        ) => {
            router.push(`/purchase-order-lines/${data.updatePurchaseOrderLine?.id}`);
            showSuccess(t('messages:success-updated'));
        },
        onError: (error) => {
            showError(t('messages:error-update-data'));
        }
    });

    const updatePurchaseOrderLine = ({ id, input }: UpdatePurchaseOrderLineMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                updatePurchaseOrderLine({
                    id: id,
                    input: { ...form.getFieldsValue(true), accountId: 1 }
                });
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['modified'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <Form form={form} scrollToFirstError>
                <PurchaseOrderLineForm companyId={"sdf"} purchaseOrderId={"test"} form={form}/>
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
