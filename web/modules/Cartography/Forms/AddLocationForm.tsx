import { WrapperForm } from '@components';
import { showError, showInfo, showSuccess } from '@helpers';
import { Button, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { blocsData } from 'fake-data/blocs';
import {
    BulkCreateLocationsMutation,
    BulkCreateLocationsMutationVariables,
    SimpleGetAllBLocksQuery,
    useBulkCreateLocationsMutation,
    useSimpleGetAllBLocksQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const AddLocationForm = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const [blocks, setBlocks] = useState<any>();

    //To render simple blocks list for attached block selection (id and name without any filter)
    const blocksList = useSimpleGetAllBLocksQuery<Partial<SimpleGetAllBLocksQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (blocksList) {
            setBlocks(blocksList?.data?.blocks?.results);
        }
    }, [blocksList]);

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const { mutate, isLoading: createLoading } = useBulkCreateLocationsMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: BulkCreateLocationsMutation,
                _variables: BulkCreateLocationsMutationVariables,
                _context: any
            ) => {
                // router.push(`/location/${data.createLocation.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const bulkCreateLocation = ({ input }: BulkCreateLocationsMutationVariables) => {
        mutate({ input });
    };

    const onReplenishChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ replenish: e.target.checked });
    };

    // Call api to create new group
    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                console.log('wolf', formData);
                bulkCreateLocation({ input: formData });
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
                <Form.Item
                    label={t('d:associatedBlock')}
                    name="blockId"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-select-1')} ${t('d:block')}`
                        }
                    ]}
                >
                    <Select
                        placeholder={`${t('messages:please-select-a', {
                            name: t('d:block')
                        })}`}
                    >
                        {blocks?.map((block: any) => (
                            <Option key={block.id} value={block.id}>
                                {block.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    label={t('d:aisle')}
                    name="aisle"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-aisle')}
                    name="numberOfAisle"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('common:column')}
                    name="column"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-column')}
                    name="numberOfColumn"
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-empty-input')}`
                        }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('d:level')}
                    name="level"
                    rules={[
                        {
                            required: true,
                            message: `${t('messages:error-message-empty-input')}`
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-level')}
                    name="numberOfLevel"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('d:step')}
                    name="levelStep"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label={t('d:position')}
                    name="position"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('d:nb-position')}
                    name="numberOfPosition"
                    rules={[
                        { required: true, message: `${t('messages:error-message-empty-input')}` }
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name="replenish">
                    <Checkbox onChange={onReplenishChange}>{t('d:replenish')}</Checkbox>
                </Form.Item>

                <Form.Item label={t('d:constraint')} name="constraint">
                    <Input />
                </Form.Item>

                <Form.Item label={t('d:comment')} name="comment">
                    <Input />
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
