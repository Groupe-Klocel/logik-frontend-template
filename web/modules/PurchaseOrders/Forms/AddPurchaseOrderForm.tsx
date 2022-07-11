import { WrapperForm } from '@components';
import { Button, Form, } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreatePurchaseOrderMutation,
    CreatePurchaseOrderMutation,
    CreatePurchaseOrderMutationVariables,
    useCreateStatusEvolutionMutation,
    CreateStatusEvolutionMutation,
    CreateStatusEvolutionMutationVariables
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
} from '@helpers';
import { PurchaseOrderForm } from './PurchaseOrderForm';
import moment from 'moment';

export const AddPurchaseOrderForm = () => {
    const { t } = useTranslation('common');
    const [poId, setPoId] = useState('');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [form] = Form.useForm();

    const {mutate: createStatusEvolutionMutate, isLoading: createStatusEvolutionLoading} = useCreateStatusEvolutionMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                date: CreateStatusEvolutionMutation,
                _variables: CreateStatusEvolutionMutationVariables,
                _context: any
            ) => {
                showSuccess(t('messages:success-created'));
                console.log(form.getFieldValue('type'))
                if(form.getFieldValue('type') == 10102) {
                    router.push(`/purchase-orders/`);
                } else {
                    router.push(`/purchase-orders/${poId}`);
                }
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    )

    const createStatusEvolution = ({input}: CreateStatusEvolutionMutationVariables) => {
        createStatusEvolutionMutate({input});
    }

    const { mutate, isLoading: createLoading } = useCreatePurchaseOrderMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreatePurchaseOrderMutation,
                _variables: CreatePurchaseOrderMutationVariables,
                _context: any
            ) => {
                setPoId(data.createPurchaseOrder.id!);
                // create new stock evolution
                createStatusEvolution({
                    input: {
                        stockOwnerId: data.createPurchaseOrder.stockOwnerId!,
                        object: 19010,
                        objectReference: data.createPurchaseOrder.id,
                        status: data.createPurchaseOrder.status,
                        feedback: false,
                        toBeFeedback: false
                    }
                })
                // showSuccess(t('messages:success-created'));
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
                delete formData.companyName
                const newFormData = {
                    ...formData, 
                    status: parseInt(formData.status), 
                    type: parseInt(formData.type),
                    orderDate: moment(),
                    expectedGoodsInDate: (formData.expectedGoodsInDate) ? formData.expectedGoodsInDate: moment()
                };
                createPurchaseLine({ input: newFormData });
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
            <Form form={form} scrollToFirstError initialValues={{status: '8'}}>
                <PurchaseOrderForm form={form} mode='add'/>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};