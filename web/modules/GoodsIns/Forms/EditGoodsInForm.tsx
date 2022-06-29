import { FC, useEffect, useState } from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { StyledForm, WrapperForm } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    UpdateGoodsInMutation,
    UpdateGoodsInMutationVariables,
    useUpdateGoodsInMutation,
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

export interface IEditGoodsInFormProps {
    goodsInId: string;
    details: any;
}

interface IOption {
    value: string;
    id: string;
}

export const EditGoodsInForm: FC<IEditGoodsInFormProps> = ({
    goodsInId,
    details
}: IEditGoodsInFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();
    const name = t('common:name');
    const comment = t('common:comment');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

 
    // const [aId, setAId] = useState<number>();

    const { mutate, isLoading: updateLoading } = useUpdateGoodsInMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateGoodsInMutation,
                _variables: UpdateGoodsInMutationVariables,
                _context: any
            ) => {
                router.push(`/goods-in/${data.updateGoodsIn?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );
    

    const updateGoodsIn = ({ id, input }: UpdateGoodsInMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true);
                delete formData.name;
                updateGoodsIn({ input: formData, id: goodsInId });
            })
            .catch((err) => {
                showError(t('messages:error-creating-data'));
            });
    };

    useEffect(() => {
        const tmp_details = { ...details };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['modified'];
        delete tmp_details['createdBy'];
        delete tmp_details['modifiedBy'];
        
        form.setFieldsValue(tmp_details);
        
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
        <StyledForm>
            <WrapperForm>
                <Form form={form} scrollToFirstError>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} xl={12}>
                            <Form.Item
                                label={name}
                                name="name"
                                rules={[{ required: true, message: errorMessageEmptyInput }]}
                            >
                                <Input disabled/>
                            </Form.Item>

                            <Form.Item label={comment} name="comment">
                                <Input />
                            </Form.Item>
                            
                        </Col>
                    </Row>
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
