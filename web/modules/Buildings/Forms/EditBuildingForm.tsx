import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import {
    GetBuildingStatusConfigsQuery,
    UpdateBuildingMutation,
    UpdateBuildingMutationVariables,
    useGetBuildingStatusConfigsQuery,
    useUpdateBuildingMutation
} from 'generated/graphql';

const { Option } = Select;

export type EditBuildingFormProps = {
    buildingId: string;
    details: any;
};

export const EditBuildingForm: FC<EditBuildingFormProps> = ({
    buildingId,
    details
}: EditBuildingFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [buildingStatus, setBuildingStatus] = useState<any>();

    // TYPED SAFE ALL
    const [form] = Form.useForm();

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

    const { mutate, isLoading: updateLoading } = useUpdateBuildingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateBuildingMutation,
                _variables: UpdateBuildingMutationVariables,
                _context: any
            ) => {
                router.push(`/building/${data.updateBuilding?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateBuilding = ({ id, input }: UpdateBuildingMutationVariables) => {
        mutate({ id, input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['statusText'];
                updateBuilding({ id: buildingId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details
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
                <Button type="primary" loading={updateLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
