import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, Row } from 'antd';
import { useAuth } from 'context/AuthContext';
import { CreateParameterMutation, CreateParameterMutationVariables, useCreateParameterMutation } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StockStatusForm } from './StockStatusForm';

export const AddStockStatusForm = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useCreateParameterMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: CreateParameterMutation,
            _variables: CreateParameterMutationVariables,
            _context: any
        ) => {
            router.push(`/stock-statuses/${data.createParameter?.id}`);
            showSuccess(t('messages:success-created'));
        },
        onError: (error) => {
            showError(t('messages:error-create-data'));
        }
    });

    const createParameter = ({ input }: CreateParameterMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                createParameter({
                    input: { ...form.getFieldsValue(true), scope: 'stock_statuses' }
                });
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };

    useEffect(() => {
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);
    return (
        <WrapperForm>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                scrollToFirstError
            >
                <StockStatusForm/>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            {t('submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
