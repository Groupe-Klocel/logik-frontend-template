import { WrapperForm } from '@components';
import { Button, Input, Form, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import {
    GetPreparationModeParamsQuery,
    SimpleGetAllPackagingListQuery,
    UpdateEquipmentDetailMutation,
    UpdateEquipmentDetailMutationVariables,
    useGetPreparationModeParamsQuery,
    useSimpleGetAllPackagingListQuery,
    useUpdateEquipmentDetailMutation
} from 'generated/graphql';

const { Option } = Select;

export type EditEquipmentDetailFormProps = {
    equipmentDetailId: string;
    details: any;
};

export const EditEquipmentDetailForm: FC<EditEquipmentDetailFormProps> = ({
    equipmentDetailId,
    details
}: EditEquipmentDetailFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [packagings, setPackagings] = useState<any>();
    const [preparationModes, setPreparationModes] = useState<any>();

    //To render Simple packaging list
    const packagingList = useSimpleGetAllPackagingListQuery<
        Partial<SimpleGetAllPackagingListQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (packagingList) {
            setPackagings(packagingList?.data?.packagings?.results);
        }
    }, [packagingList]);

    //To render preparation modes from parameter table for the given scope
    const preparationModesList = useGetPreparationModeParamsQuery<
        Partial<GetPreparationModeParamsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (preparationModesList) {
            setPreparationModes(preparationModesList?.data?.listParametersForAScope);
        }
    }, [preparationModesList]);

    const { mutate, isLoading: updateLoading } = useUpdateEquipmentDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateEquipmentDetailMutation,
                _variables: UpdateEquipmentDetailMutationVariables,
                _context: any
            ) => {
                router.push(`/equipment/detail/${data.updateEquipmentDetail?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateEquipmentDetail = ({ id, input }: UpdateEquipmentDetailMutationVariables) => {
        mutate({ id, input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                if (formData['preparationMode'] == '') {
                    formData['preparationMode'] = null;
                }
                if (formData['packagingId'] == '') {
                    formData['packagingId'] = null;
                }
                delete formData['associatedStockOwner'];
                delete formData['associatedEquipment'];
                delete formData['equipment'];
                delete formData['packaging'];
                delete formData['preparationModeText'];
                delete formData['stockOwner'];
                updateEquipmentDetail({ id: equipmentDetailId, input: formData });
            })
            .catch((err) => {
                showError(t('error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedStockOwner: details.stockOwner.name,
            associatedEquipment: details.equipment.name
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
                <Form.Item label={t('common:equipment')} name="associatedEquipment">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item label={t('common:preparation-mode')} name="preparationMode" hasFeedback>
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:preparation-mode')
                        })}`}
                    >
                        <Option value=""> </Option>
                        {preparationModes?.map((mode: any) => (
                            <Option key={mode.id} value={parseInt(mode.code)}>
                                {mode.text}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label={t('common:packaging')} name="packagingId" hasFeedback>
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:packaging')
                        })}`}
                    >
                        <Option value=""> </Option>
                        {packagings?.map((packaging: any) => (
                            <Option key={packaging.id} value={packaging.id}>
                                {packaging.name}
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
