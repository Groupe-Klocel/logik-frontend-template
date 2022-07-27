import { FC, useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { StyledForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdatePatternPathMutation,
    UpdatePatternPathMutation,
    UpdatePatternPathMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { PatternPathForm } from './PatternPathForm';

export interface IEditPatternPathFormProps {
    id: string;
    details: any;
}

export const EditPatternPathForm: FC<IEditPatternPathFormProps> = ({
    id,
    details
}: IEditPatternPathFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdatePatternPathMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdatePatternPathMutation,
            _variables: UpdatePatternPathMutationVariables,
            _context: any
        ) => {
            router.push(`/pattern-paths/${data.updatePatternPath?.id}`);
            showSuccess(t('messages:success-updated'));
        },
        onError: (error) => {
            showError(t('messages:error-update-data'));
        }
    });

    const updatePatternPath = ({ id, input }: UpdatePatternPathMutationVariables) => {
        mutate({ id, input });
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
                updatePatternPath({
                    id: id,
                    input: newFormData
                });
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['createdBy'];
        delete tmp_details['modified'];
        delete tmp_details['modifiedBy'];
        delete tmp_details['extras'];
        delete tmp_details['paths'];
        delete tmp_details['patternTypeText'];
        delete tmp_details['statusText'];
        delete tmp_details['stockOwner'];

        console.log(tmp_details)
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <Form form={form} scrollToFirstError>
                <PatternPathForm form={form} mode="edit"/>
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
