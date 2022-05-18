import { WrapperForm } from '@components';
import { Button, Col, Input, InputNumber, Row, Form, AutoComplete, Checkbox } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';
import {
    useCreateBarcodeMutation,
    CreateBarcodeMutation,
    CreateBarcodeMutationVariables,
    CreateBlockMutation,
    CreateBlockMutationVariables,
    useCreateBlockMutation
} from 'generated/graphql';
import {
    showError,
    showSuccess,
    showInfo,
    useArticleIds,
    DEFAULT_PAGE_NUMBER,
    DEFAULT_ITEMS_PER_PAGE,
    PaginationType
} from '@helpers';
import internal from 'stream';

interface IOption {
    value: string;
    id: string;
}

export const AddBlockForm = () => {
    const { t } = useTranslation('common');
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    // TEXTS TRANSLATION ( REFACTORING POSSIBLE / EXPORT / DON'T KNOW YET )
    // const selectArticle = t('common:article');
    // const selectArticlePlaceholder = t('messages:please-select', { name: t('common:article') });
    const name = t('common:name');
    const moveable = t('common:moveable');
    const errorMessageEmptyInput = t('messages:error-message-empty-input');
    // const articleSelectErrorMessage = `${t('messages:error-message-select-1')} ${t(
    //     'common:article'
    // )}`;

    // END TEXTS TRANSLATION

    // TYPED SAFE ALL
    const [form] = Form.useForm();

    const [idOptions, setIdOptions] = useState<Array<IOption>>([]);
    const [articleName, setArticleName] = useState<string>('');
    const [aId, setAId] = useState<number>();

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
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} xl={12}>
                        <Form.Item
                            label={name}
                            name="name"
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                            label={moveable}
                            name="moveable"
                            valuePropName="checked"
                            initialValue={true}
                            rules={[{ required: true, message: errorMessageEmptyInput }]}
                        >
                            <Checkbox>{moveable}</Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <Button type="primary" loading={createLoading} onClick={onFinish}>
                    {t('actions:submit')}
                </Button>
            </div>
        </WrapperForm>
    );
};
