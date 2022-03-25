import { DeleteOutlined } from '@ant-design/icons';
import { showError, showSuccess } from '@helpers';
import { Button } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    DeleteArticleMutation,
    DeleteArticleMutationVariables,
    useDeleteArticleMutation
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';

export interface IDeletetArticleButtonProps {
    id: number;
    onLoading?: () => void;
    onDeleteSuccess?: () => void;
}
const DeleteArticleButton = ({ id, onLoading, onDeleteSuccess }: IDeletetArticleButtonProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const { mutate, isLoading: deleteLoading } = useDeleteArticleMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleMutation,
                _variables: DeleteArticleMutationVariables,
                _context: any
            ) => {
                if (!deleteLoading) {
                    !!onDeleteSuccess && onDeleteSuccess();
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );
    const deleteArticle = ({ id }: DeleteArticleMutationVariables) => {
        !!onLoading && onLoading();
        mutate({ id });
    };
    return (
        <Button
            icon={<DeleteOutlined />}
            danger
            // onClick={() => alert(`delete article N° ${record.id}`)}
            onClick={() => deleteArticle({ id: id })}
        />
    );
};

export { DeleteArticleButton };
