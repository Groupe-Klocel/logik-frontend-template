import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, Row } from 'antd';
import { useAuth } from 'context/AuthContext';
import { CreatePatternPathMutation, CreatePatternPathMutationVariables, useCreatePatternPathMutation } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PatternPathForm } from './PatternPathForm';

export const AddPatternPathForm = () => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useCreatePatternPathMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: CreatePatternPathMutation,
            _variables: CreatePatternPathMutationVariables,
            _context: any
        ) => {
            router.push(`/pattern-paths/${data.createPatternPath?.id}`);
            showSuccess(t('messages:success-created'));
        },
        onError: (error) => {
            showError(t('messages:error-create-data'));
        }
    });

    const createParameter = ({ input }: CreatePatternPathMutationVariables) => {
        mutate({ input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
                delete formData.companyName;
                delete formData.patternName;
                delete formData.stockOwnerId;
                
                const newFormData = {
                    ...formData,
                    status: parseInt(formData.status)
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
                <PatternPathForm form={form} mode="add"/>
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
