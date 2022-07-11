import { ContentSpin, HeaderContent, LinkButton, PageContentWrapper } from '@components';
import { showError, showSuccess } from '@helpers';
import { Space, Typography } from 'antd';
import { useAuth } from 'context/AuthContext';
import {
    DeleteBarcodeMutation,
    DeleteBarcodeMutationVariables,
    GetBarcodeByIdQuery,
    useDeleteBarcodeMutation,
    useGetBarcodeByIdQuery
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { NextRouter } from 'next/router';
import { FC } from 'react';
import { BarcodeDetails } from '../Elements/BarcodeDetails';
import { barcodesRoutes } from '../Static/barcodesRoutes';

export type SingleBarcodeTypeProps = {
    id: any;
    router: NextRouter;
};

const SingleBarcode: FC<SingleBarcodeTypeProps> = ({ id, router }: SingleBarcodeTypeProps) => {
    const { graphqlRequestClient } = useAuth();
    const { t } = useTranslation();

    const { isLoading, data, error } = useGetBarcodeByIdQuery<GetBarcodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeleteBarcodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBarcodeMutation,
                _variables: DeleteBarcodeMutationVariables,
                _context: any
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

    // const deleteBarcode = ({ id }: DeleteBarcodeMutationVariables) => {
    //     mutate({ id });
    // };

    const breadsCrumb = [
        ...barcodesRoutes,
        {
            breadcrumbName: `${data?.barcode?.name}`
        }
    ];

    return (
        <>
            <HeaderContent
                title={`${t('menu:barcode')} ${data?.barcode?.name}`}
                routes={breadsCrumb}
                onBack={() => router.push('/barcodes')}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:edit')}
                            path={`/barcode/edit/${id}`}
                            type="primary"
                        />
                        {/* <Button loading={deleteLoading} onClick={() => deleteBarcode({ id: id })}>
                            {t('actions:delete')}
                        </Button> */}
                    </Space>
                }
            />
            <PageContentWrapper>
                {/* {!!data}
                    <Typography >Content Does not exist</Typography> */}
                {data && !isLoading ? (
                    data.barcode !== null ? (
                        <BarcodeDetails details={data?.barcode} />
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

SingleBarcode.displayName = 'SingleBarcode';

export { SingleBarcode };
