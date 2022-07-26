import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Select } from 'antd';
import {
    CreateBuildingMutation,
    CreateBuildingMutationVariables,
    GetBuildingStatusConfigsQuery,
    useCreateBuildingMutation,
    useGetBuildingStatusConfigsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import Router from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddBuildingsForm = () => {
    const { t } = useTranslation('common');
    const [buildingStatus, setBuildingStatus] = useState<any>();
    useState<any>();

    //To render buildings statuses from config table for the given scope
    const buildingStatusList = useGetBuildingStatusConfigsQuery<
        Partial<GetBuildingStatusConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (buildingStatusList) {
            setBuildingStatus(buildingStatusList?.data?.listConfigsForAScope);
        }
    }, [buildingStatusList]);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useCreateBuildingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateBuildingMutation,
                _variables: CreateBuildingMutationVariables,
                _context: any
            ) => {
                Router.push(`/building/${data.createBuilding.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createBuilding = ({ input }: CreateBuildingMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                createBuilding({ input: formData });
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
                    name="name"
                    label={t('common:name')}
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="address1" label={t('common:address1')}>
                    <Input />
                </Form.Item>
                <Form.Item name="address2" label={t('common:address2')}>
                    <Input />
                </Form.Item>
                <Form.Item name="address3" label={t('common:address3')}>
                    <Input />
                </Form.Item>
                <Form.Item name="postCode" label={t('common:post-code')}>
                    <Input />
                </Form.Item>
                <Form.Item name="city" label={t('common:city')}>
                    <Input />
                </Form.Item>
                <Form.Item name="country" label={t('common:country')}>
                    <Input />
                </Form.Item>
                <Form.Item name="contactName" label={t('common:contact-name')}>
                    <Input />
                </Form.Item>
                <Form.Item name="contactPhone" label={t('common:contact-phone')}>
                    <Input />
                </Form.Item>
                <Form.Item name="contactMobile" label={t('common:contact-mobile')}>
                    <Input />
                </Form.Item>
                <Form.Item name="contactEmail" label={t('common:contact-email')}>
                    <Input />
                </Form.Item>
                <Form.Item label={t('common:status')} name="status">
                    <Select>
                        <Option value=""> </Option>
                        {buildingStatus?.map((status: any) => (
                            <Option key={status.id} value={parseInt(status.code)}>
                                {status.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
