import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateFeatureCodeMutation,
    UpdateFeatureCodeMutation,
    UpdateFeatureCodeMutationVariables,
    useSimpleGetAllStockOwnersQuery,
    SimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;

export type EditFeatureCodeFormProps = {
    featureCodeId: string;
    details: any;
};

export const EditFeatureCodeForm: FC<EditFeatureCodeFormProps> = ({
    featureCodeId,
    details
}: EditFeatureCodeFormProps) => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [uniqueValue, setUniqueValue] = useState(details.unique);
    const [dateTypeValue, setDateTypeValue] = useState(details.dateType);
    const [stockOwners, setStockOwners] = useState<any>();

    //To render Simple builgings list
    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    const { mutate, isLoading: updateLoading } = useUpdateFeatureCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateFeatureCodeMutation,
                _variables: UpdateFeatureCodeMutationVariables,
                _context: any
            ) => {
                router.push(`/feature-code/${data.updateFeatureCode?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateFeatureCode = ({ id, input }: UpdateFeatureCodeMutationVariables) => {
        mutate({ id, input });
    };

    const onUniqueChange = (e: CheckboxChangeEvent) => {
        setUniqueValue(!uniqueValue);
        form.setFieldsValue({ unique: e.target.checked });
    };
    const onDateTypeChange = (e: CheckboxChangeEvent) => {
        setDateTypeValue(!dateTypeValue);
        form.setFieldsValue({ dateType: e.target.checked });
    };
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                if (formData.stockOwnerId == undefined) {
                    formData.stockOwnerId = stockOwners?.find(
                        (e: any) => e.name == formData.associatedStockOwner
                    ).id;
                }
                delete formData['associatedStockOwner'];
                delete formData['stockOwner'];
                updateFeatureCode({ id: featureCodeId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedStockOwner: details.stockOwner.name
        };
        delete tmp_details['id'];
        delete tmp_details['created'];
        delete tmp_details['createdBy'];
        delete tmp_details['modified'];
        delete tmp_details['modifiedBy'];
        form.setFieldsValue(tmp_details);
        if (updateLoading) {
            showInfo(t('messages:info-create-wip'));
        }
    }, [updateLoading]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('common:stock-owner')}
                    name="stockOwnerId"
                    hasFeedback
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Select defaultValue={details.stockOwner.name}>
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('common:name')}
                    name="name"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Input />
                </Form.Item>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item name="unique">
                            <Checkbox checked={uniqueValue} onChange={onUniqueChange}>
                                {t('common:unique')}
                            </Checkbox>
                        </Form.Item>

                        <Form.Item name="dateType">
                            <Checkbox checked={dateTypeValue} onChange={onDateTypeChange}>
                                {t('d:dateType')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
