import { FC, useEffect } from 'react';
import { Button, Form, Space } from 'antd';
import { StyledForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateParameterMutation,
    UpdateParameterMutation,
    UpdateParameterMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { StockStatusForm } from './StockStatusForm';

export interface IEditStockStatusFormProps {
    id: string;
    details: any;
}

export const EditStockStatusForm: FC<IEditStockStatusFormProps> = ({
    id,
    details
}: IEditStockStatusFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdateParameterMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdateParameterMutation,
            _variables: UpdateParameterMutationVariables,
            _context: any
        ) => {
            router.push(`/stock-statuses/${data.updateParameter?.id}`);
            showSuccess(t('messages:success-updated'));
        },
        onError: (error) => {
            showError(t('messages:error-update-data'));
        }
    });

    const updateParameter = ({ id, input }: UpdateParameterMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                updateParameter({
                    id: id,
                    input: { ...form.getFieldsValue(true) }
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
        delete tmp_details['translation'];
        delete tmp_details['system'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <Form form={form} scrollToFirstError initialValues={details}>
                <StockStatusForm/>
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
