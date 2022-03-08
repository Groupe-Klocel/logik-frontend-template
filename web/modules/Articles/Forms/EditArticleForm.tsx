import { FC, useEffect } from 'react';
import { Button, Form, Modal, Space } from 'antd';
import { StyledForm, WrapperForm, WrapperStepContent } from '@components';
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
}

export const EditArticleForm: FC<IEditArticleFormProps> = ({articleId, details}: IEditArticleFormProps) => {
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
              updateArticle({ id: parseInt(articleId), input: { ...form.getFieldsValue(true), accountId: 1 } });
            })
            .catch((err) => showError(t('messages:error-update-data')));
    };
    let tmp_details = {...details};
    delete tmp_details['id'];
    delete tmp_details['created'];
    delete tmp_details['modified'];
    
    form.setFieldsValue(tmp_details);
    console.log(tmp_details);
    useEffect(() => {
        if (updateLoading) {
            showInfo(t('messages:info-update-wip'));
        }
    }, [updateLoading]);

    return (
      <StyledForm>
        <Form form={form} scrollToFirstError>
          	<AddArticleStep1/>
          	<AddArticleStep2/>
          	<AddArticleStep3/>
			<div style={{ textAlign: 'right' }}>
				<Space>
					<Button onClick={()=> onFinish()} type="primary">
						{t('actions:update')}
					</Button>
					<Button onClick={() => router.back()}>
						{t('actions:cancel')}
					</Button>
				</Space>
			</div>
        </Form>
      </StyledForm>
    );
};
