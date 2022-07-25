import { useAuth } from 'context/AuthContext';
import {
    GetPackagingByIdQuery,
    SoftDeletePackagingMutation,
    SoftDeletePackagingMutationVariables,
    useGetPackagingByIdQuery,
    useSoftDeletePackagingMutation
} from 'generated/graphql';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { packagingsRoutes } from 'modules/Packagings/Static/packagingsRoutes';
import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Modal, Space, Typography } from 'antd';
import { PackagingDetails } from '../Elements/PackagingDetails';
import { pathParams, showError, showSuccess } from '@helpers';
import { EditTwoTone } from '@ant-design/icons';

export type SinglePackagingTypeProps = {
    id: any;
    router: NextRouter;
};

const SinglePackaging: FC<SinglePackagingTypeProps> = ({
    id,
    router
}: SinglePackagingTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetPackagingByIdQuery<GetPackagingByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...packagingsRoutes,
        {
            breadcrumbName: `${data?.packaging?.name}`
        }
    ];

    const { mutate, isLoading: deleteLoading } = useSoftDeletePackagingMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeletePackagingMutation,
                _variables: SoftDeletePackagingMutationVariables,
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

    const softDeletePackaging = ({ packagingId }: SoftDeletePackagingMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ packagingId });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    return (
        <>
            <HeaderContent
                title={`${t('menu:packaging')}: ${data?.packaging?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/packagings')}
                actionsRight={
                    <Space>
                        {/* ADD HERE*/}
                        <LinkButton
                            icon={<EditTwoTone />}
                            path={pathParams('/packaging/edit/[id]', id)}
                        />
                        {data?.packaging?.system != true ? (
                            <Button
                                danger
                                loading={deleteLoading}
                                onClick={() => softDeletePackaging({ packagingId: id })}
                            >
                                {t('actions:delete')}
                            </Button>
                        ) : (
                            <></>
                        )}
                        {/* ADD HERE*/}
                    </Space>
                }
            />
            <PageContentWrapper>
                {data && !isLoading ? (
                    data.packaging !== null ? (
                        <PackagingDetails details={data?.packaging} />
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

export { SinglePackaging };
