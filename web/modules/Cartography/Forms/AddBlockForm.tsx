import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useCreateBlockMutation,
    CreateBlockMutation,
    CreateBlockMutationVariables
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_ITEMS_PER_PAGE,
    PaginationType
} from '@helpers';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

interface IOption {
    value: string;
    id: string;
}

const { TextArea } = Input;

export const AddBlockForm = () => {
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

    const { mutate, isLoading: createLoading } = useCreateBlockMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: CreateBlockMutation,
                _variables: CreateBlockMutationVariables,
                _context: any
            ) => {
                router.push(`/block/${data.createBlock.id}`);
                showSuccess(t('messages:success-created'));
            },
            onError: () => {
                showError(t('messages:error-creating-data'));
            }
        }
    );

    const createBlock = ({ input }: CreateBlockMutationVariables) => {
        mutate({ input });
    };

    const onMoveableChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ moveable: e.target.checked });
    };
    const onBulkChange = (e: CheckboxChangeEvent) => {
        form.setFieldsValue({ bulk: e.target.checked });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
                // Here make api call of something else
                const formData = form.getFieldsValue(true);
                delete formData.blockName;
                createBlock({ input: formData });
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
                    label={name}
                    name="name"
                    rules={[{ required: true, message: errorMessageEmptyInput }]}
                >
                    <Input />
                </Form.Item>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item label={level} name="level">
                            <InputNumber min={-1} max={10} defaultValue={-1} />
                        </Form.Item>

                        <Form.Item label={blockGroup} name="blockGroup">
                            <InputNumber min={0} max={10} defaultValue={0} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item name="moveable">
                            <Checkbox onChange={onMoveableChange}>{moveable}</Checkbox>
                        </Form.Item>

                        <Form.Item name="bulk">
                            <Checkbox onChange={onBulkChange}>{bulk}</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label={comment} name="comment">
                    <TextArea>{comment}</TextArea>
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