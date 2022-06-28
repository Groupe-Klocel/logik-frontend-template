import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, Checkbox, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateBlockMutation,
    UpdateBlockMutation,
    UpdateBlockMutationVariables,
    useGetBlockLevelsParamsQuery,
    GetBlockLevelsParamsQuery,
    useSimpleGetAllBuildingsQuery,
    SimpleGetAllBuildingsQuery
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Option } = Select;
const { TextArea } = Input;

export type EditBlockFormProps = {
    blockId: string;
    details: any;
};

export const EditBlockForm: FC<EditBlockFormProps> = ({ blockId, details }: EditBlockFormProps) => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const name = t('common:name');
    const moveable = t('d:moveable');
    const bulk = t('d:bulk');
    const comment = t('common:comment');
    const level = t('d:level');
    const blockGroup = t('d:blockGroup');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');

    // TYPED SAFE ALL
    const [form] = Form.useForm();
    const [moveableValue, setMoveableValue] = useState(details.moveable);
    const [bulkValue, setBulkValue] = useState(details.bulk);
    const [blockLevels, setBlockLevels] = useState<any>();
    const [buildings, setBuildings] = useState<any>();

    //To render block Levels from parameter table for the given scope
    const blockLevelsList = useGetBlockLevelsParamsQuery<Partial<GetBlockLevelsParamsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (blockLevelsList) {
            setBlockLevels(blockLevelsList?.data?.listParametersForAScope);
        }
    }, [blockLevelsList]);

    //To render Simple builgings list
    const buildingList = useSimpleGetAllBuildingsQuery<Partial<SimpleGetAllBuildingsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (buildingList) {
            setBuildings(buildingList?.data?.buildings?.results);
        }
    }, [buildingList]);

    const { mutate, isLoading: updateLoading } = useUpdateBlockMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: UpdateBlockMutation,
                _variables: UpdateBlockMutationVariables,
                _context: any
            ) => {
                router.push(`/block/${data.updateBlock?.id}`);
                showSuccess(t('messages:success-updated'));
            },
            onError: () => {
                showError(t('messages:error-update-data'));
            }
        }
    );

    const updateBlock = ({ id, input }: UpdateBlockMutationVariables) => {
        mutate({ id, input });
    };

    const onMoveableChange = (e: CheckboxChangeEvent) => {
        setMoveableValue(!moveableValue);
        form.setFieldsValue({ moveable: e.target.checked });
    };
    const onBulkChange = (e: CheckboxChangeEvent) => {
        setBulkValue(!bulkValue);
        form.setFieldsValue({ bulk: e.target.checked });
    };
    console.log('xoxo', blockLevels);
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                if (formData.buildingId == undefined) {
                    formData.buildingId = buildings?.find(
                        (e: any) => e.name == formData.associatedBuilding
                    ).id;
                }
                const blockLevelCode =
                    formData.blockLevel == 'N/A' || formData.blockLevel == '-1'
                        ? -1
                        : parseInt(
                              blockLevels?.find((e: any) => e.text == formData.blockLevel).code
                          );
                if (formData.level !== blockLevelCode) {
                    formData.level = blockLevelCode;
                }
                delete formData['associatedBuilding'];
                delete formData['blockLevel'];
                delete formData['building'];
                updateBlock({ id: blockId, input: formData });
            })
            .catch((err) => {
                showError(t('messages:error-update-data'));
            });
    };

    useEffect(() => {
        const tmp_details = {
            ...details,
            associatedBuilding: details.building.name,
            blockLevel: blockLevels?.find((e: any) => e.code == details.level).text
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
    }, [updateLoading, blockLevels]);

    return (
        <WrapperForm>
            <Form form={form} scrollToFirstError>
                <Form.Item label={t('d:building')} name="buildingId" hasFeedback>
                    <Select defaultValue={details.building.name}>
                        {buildings?.map((building: any) => (
                            <Option key={building.id} value={building.id}>
                                {building.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={name}
                    name="name"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Input />
                </Form.Item>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item label={t('d:blockLevel')} name="blockLevel" hasFeedback>
                            <Select>
                                {blockLevels?.map((blockLevel: any) => (
                                    <Option key={blockLevel.id} value={blockLevel.code}>
                                        {blockLevel.text}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item label={blockGroup} name="blockGroup">
                            <InputNumber min={0} max={10} defaultValue={0} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="moveable">
                            <Checkbox checked={moveableValue} onChange={onMoveableChange}>
                                {moveable}
                            </Checkbox>
                        </Form.Item>

                        <Form.Item name="bulk">
                            <Checkbox checked={bulkValue} onChange={onBulkChange}>
                                {bulk}
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label={comment}
                    name="comment"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <TextArea>{comment}</TextArea>
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
