// import { WrapperForm } from '@components';
// import { Button, Col, Form, Input, Row } from 'antd';
// import useTranslation from 'next-translate/useTranslation';
// import { StockStatusForm } from './StockStatusForm';

// export const EditStockStatusForm = () => {
//     const { t } = useTranslation('common');

//     // Call api to create new user
//     const onFinish = () => {
//         alert('update Success');
//     };

//     const onFinishFailed = () => {
//         alert('Failed');
//     };

//     return (
//         <WrapperForm>
//             <Form
//                 name="basic"
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//                 scrollToFirstError
//             >
//                 <StockStatusForm/>
//                 <Row>
//                     <Col span={24} style={{ textAlign: 'right' }}>
//                         <Button type="primary" htmlType="submit">
//                             {t('update')}
//                         </Button>
//                     </Col>
//                 </Row>
//             </Form>
//         </WrapperForm>
//     );
// };


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
        delete tmp_details['translation'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <Form form={form} scrollToFirstError>
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
