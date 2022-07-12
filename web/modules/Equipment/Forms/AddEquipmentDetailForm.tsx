import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import {
    CreateEquipmentDetailMutation,
    CreateEquipmentDetailMutationVariables,
    GetEquipmentByIdQuery,
    GetPreparationModeParamsQuery,
    SimpleGetAllPackagingListQuery,
    useCreateEquipmentDetailMutation,
    useGetEquipmentByIdQuery,
    useGetPreparationModeParamsQuery,
    useSimpleGetAllPackagingListQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddEquipmentDetailForm = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [packagings, setPackagings] = useState<any>();
    const [preparationModes, setPreparationModes] = useState<any>();

    //to recover equipment information for pre-filling
    const equipmentById = useGetEquipmentByIdQuery<GetEquipmentByIdQuery, Error>(
        graphqlRequestClient,
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            id
        }
    );

    useEffect(() => {
        if (equipmentById) {
            const formData = form.getFieldsValue(true);
            formData['equipmentId'] = id;
            formData['associatedEquipment'] = equipmentById?.data?.equipment?.name;
            formData['stockOwnerId'] = equipmentById?.data?.equipment?.stockOwnerId;
        }
    }, [equipmentById]);

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

    const { mutate, isLoading: createLoading } = useCreateEquipmentDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateEquipmentDetailMutation,
                _variables: CreateEquipmentDetailMutationVariables,
                _context: any
            ) => {
                router.push(`/equipment`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createEquipmentDetail = ({ input }: CreateEquipmentDetailMutationVariables) => {
        mutate({ input });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['associatedEquipment'];
                createEquipmentDetail({ input: formData });
            })
            .catch((err) => {
                showError(t('error-creating-data'));
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
                <Form.Item label={t('common:equipment')} name="associatedEquipment">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item label={t('common:preparation-mode')} name="preparationMode" hasFeedback>
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('common:preparation-mode')
                        })}`}
                    >
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
                        {packagings?.map((packaging: any) => (
                            <Option key={packaging.id} value={packaging.id}>
                                {packaging.name}
                            </Option>
                        ))}
                    </Select>
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
