import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAuth } from 'context/AuthContext';
import {
    CreateFeatureCodeMutation,
    CreateFeatureCodeMutationVariables,
    SimpleGetAllStockOwnersQuery,
    useCreateFeatureCodeMutation,
    useSimpleGetAllStockOwnersQuery
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddFeatureCodeForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [stockOwners, setStockOwners] = useState<any>();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateFeatureCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateFeatureCodeMutation,
                _variables: CreateFeatureCodeMutationVariables,
                _context: any
            ) => {
                router.push(`/feature-code/${data.createFeatureCode.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createFeatureCode = ({ input }: CreateFeatureCodeMutationVariables) => {
        mutate({ input });
    };

    //To render Simple stock owners list
    const stockOwnerList = useSimpleGetAllStockOwnersQuery<
        Partial<SimpleGetAllStockOwnersQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerList) {
            setStockOwners(stockOwnerList?.data?.stockOwners?.results);
        }
    }, [stockOwnerList]);

    //manage call back on change boxes
    const onUniqueChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ unique: e.target.checked });
    };
    const onDateTypeChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ dateType: e.target.checked });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                createFeatureCode({ input: formData });
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
            <Form form={form} scrollToFirstError>
                <Form.Item
                    label={t('common:stock-owner')}
                    name="stockOwnerId"
                    hasFeedback
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:stock-owner')
                        })}`}
                    >
                        {stockOwners?.map((stockOwner: any) => (
                            <Option key={stockOwner.id} value={stockOwner.id}>
                                {stockOwner.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={t('name')}
                    name="name"
                    rules={[{ required: true, message: `${t('error-message-empty-input')}` }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="unique">
                    <Checkbox onChange={onUniqueChange}>{t('common:unique')}</Checkbox>
                </Form.Item>

                <Form.Item name="date-type">
                    <Checkbox onChange={onDateTypeChange}>{t('d:dateType')}</Checkbox>
                </Form.Item>

                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Button type="primary" loading={createLoading} onClick={onFinish}>
                            {t('actions:submit')}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </WrapperForm>
    );
};
