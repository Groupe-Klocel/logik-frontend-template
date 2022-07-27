import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, Row } from 'antd';
import { useAuth } from 'context/AuthContext';
import { CreatePatternMutation, CreatePatternMutationVariables, useCreatePatternMutation } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PatternForm } from './PatternForm';

export const AddPatternForm = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useCreatePatternMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: CreatePatternMutation,
            _variables: CreatePatternMutationVariables,
            _context: any
        ) => {
            router.push(`/patterns/${data.createPattern?.id}`);
            showSuccess(t('messages:success-created'));
        },
        onError: (error) => {
            showError(t('messages:error-create-data'));
        }
    });

    const createParameter = ({ input }: CreatePatternMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
                delete formData.companyName;
                
                const newFormData = {
                    ...formData, 
                    status: 1,//parseInt(formData.status), 
                };
                createParameter({
                    input: newFormData
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
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                scrollToFirstError
                form={form}
            >
                <PatternForm form={form} mode="add"/>
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
