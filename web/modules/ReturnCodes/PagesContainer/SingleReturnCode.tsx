import { useAuth } from 'context/AuthContext';
import {
    DeleteReturnCodeMutation,
    DeleteReturnCodeMutationVariables,
    GetReturnCodeByIdQuery,
    useDeleteReturnCodeMutation,
    useGetReturnCodeByIdQuery
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { returnCodesRoutes } from 'modules/ReturnCodes/Static/returnCodesRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { ReturnCodeDetails } from '../Elements/ReturnCodeDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SingleReturnCodeTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleReturnCode: FC<SingleReturnCodeTypeProps> = ({
    id,
    router
}: SingleReturnCodeTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetReturnCodeByIdQuery<GetReturnCodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...returnCodesRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useDeleteReturnCodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteReturnCodeMutation,
                _variables: DeleteReturnCodeMutationVariables,
                _context: unknown
            ) => {
                router.back();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteReturnCode = ({ id }: DeleteReturnCodeMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    //modal to handle delete confirmation

    return (
        <>
            <HeaderContent
                title={`${t('menu:return-code')}: ${data?.returnCode?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/return-codes')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            title={t('actions:list', { name: t('menu:return-codes') })}
                            path={'/return-codes'}
                        />
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/return-code/edit/[id]', id)}
                        />
                        <Button
                            danger
                            loading={deleteLoading}
                            onClick={() => deleteReturnCode({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.returnCode !== null ? (
                        <ReturnCodeDetails details={data?.returnCode} />
                    ) : (
                        <Typography>Content Does not exist</Typography>
                    )
                ) : (
                    <ContentSpin />
                )}
            </PageContentWrapper>
        </>
    );
};

export { SingleReturnCode };
