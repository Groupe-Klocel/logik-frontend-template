import { WrapperForm } from '@components';
import { Button, Input, Form, Select, Row, Col, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { showError, showSuccess, showInfo } from '@helpers';
import {
    UpdateFeatureTypeDetailMutation,
    UpdateFeatureTypeDetailMutationVariables,
    useUpdateFeatureTypeDetailMutation
} from 'generated/graphql';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;

export type EditFeatureTypeDetailFormProps = {
    featureTypeDetailId: string;
    details: any;
};

export const EditFeatureTypeDetailForm: FC<EditFeatureTypeDetailFormProps> = ({
    featureTypeDetailId,
    details
}: EditFeatureTypeDetailFormProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();
    const [atReceptionValue, setAtReceptionValue] = useState(details.atReception);
    const [atPreparationValue, setAtPreparationValue] = useState(details.atPreparation);

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    // const [packagings, setPackagings] = useState<any>();
    // const [preparationModes, setPreparationModes] = useState<any>();

    const { mutate, isLoading: updateLoading } = useUpdateFeatureTypeDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateFeatureTypeDetailMutation,
                _variables: UpdateFeatureTypeDetailMutationVariables,
                _context: any
            ) => {
                router.push(`/feature-type/detail/${data.updateFeatureTypeDetail?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateFeatureTypeDetail = ({ id, input }: UpdateFeatureTypeDetailMutationVariables) => {
        mutate({ id, input });
    };

    const onAtReceptionChange = (e: CheckboxChangeEvent) => {
        setAtReceptionValue(!atReceptionValue);
        form.setFieldsValue({ atReception: e.target.checked });
    };

    const onAtPreparationChange = (e: CheckboxChangeEvent) => {
        setAtPreparationValue(!atPreparationValue);
        form.setFieldsValue({ atPreparation: e.target.checked });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData['stockOwner'];
                delete formData['featureCode'];
                delete formData['featureTypeText'];
                delete formData['associatedFeatureCode'];
                updateFeatureTypeDetail({ id: featureTypeDetailId, input: formData });
            })
            .catch((err) => {
                showError(t('error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedFeatureCode: details.featureCode.name
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
                <Form.Item label={t('menu:feature-type')} name="featureTypeText">
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item label={t('menu:feature-code')} name="associatedFeatureCode">
                    <Input disabled={true} />
                </Form.Item>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item name="atReception">
                            <Checkbox checked={atReceptionValue} onChange={onAtReceptionChange}>
                                {t('d:atReception')}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="atPreparation">
                            <Checkbox checked={atPreparationValue} onChange={onAtPreparationChange}>
                                {t('d:atPreparation')}
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
