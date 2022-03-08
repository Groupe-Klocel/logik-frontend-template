import { FC, useEffect } from 'react';
import { Form, Modal } from 'antd';
import { WrapperForm, WrapperStepContent } from '@components';
import { AddArticleStep1 } from './Steps/AddArticleStep1';
import { AddArticleStep2 } from './Steps/AddArticleStep2';
import { AddArticleStep3 } from './Steps/AddArticleStep3';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import {
    useUpdateArticleMutation,
    UpdateArticleMutation,
    UpdateArticleMutationVariables
} from 'generated/graphql';
import { showError, showSuccess, showInfo } from '@helpers';

const { Item } = Form;

export interface IEditArticleFormProps {
  articleId: string,
  details: any,
  showModal: boolean,
  setShowModal: (b: boolean) => void;
}

export const EditArticleForm: FC<IEditArticleFormProps> = ({articleId, details, showModal, setShowModal}: IEditArticleFormProps) => {
    let { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const router = useRouter();

    const [form] = Form.useForm();

    const {
        mutate,
        isLoading: updateLoading,
        data
    } = useUpdateArticleMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: UpdateArticleMutation,
            _variables: UpdateArticleMutationVariables,
            _context: unknown
        ) => {
            router.push(`/article/${data.updateArticle?.id}`);
            showSuccess(t('messages:success-updated'));
        },
        onError: (error) => {
            showError(t('messages:error-update-data'));
        }
    });

    const updateArticle = ({ id, input }: UpdateArticleMutationVariables) => {
        mutate({ id, input });
    };

    const onFinish = () => {
        form.validateFields()
            .then(() => {
              console.log(form.getFieldsValue(true));
              updateArticle({ id: articleId, input: { ...form.getFieldsValue(true), accountId: 1 } });
              setShowModal(false);
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };
    form.setFieldsValue(details);
    console.log(details);
    useEffect(() => {
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
      <Modal 
        title='Edit Article'
        className='edit-modal'
        visible={showModal}
        centered
        onOk={onFinish}
        onCancel={() => setShowModal(false)}
        width={'100vw'}
        wrapClassName={'edit-article-modal'}
        okText={'Update'}
      >
        <WrapperForm>
            <WrapperStepContent>
              <Form form={form} scrollToFirstError>
                <AddArticleStep1/>
                <AddArticleStep2/>
                <AddArticleStep3/>
              </Form>
            </WrapperStepContent>
        </WrapperForm>
      </Modal>
    );
};
