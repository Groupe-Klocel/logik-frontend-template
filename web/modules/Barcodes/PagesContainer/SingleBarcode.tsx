import { ContentSpin } from '@components';
import { Layout, Space, Button } from 'antd';
import { barcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    GetBarcodeByIdQuery,
    useGetBarcodeByIdQuery,
    useDeleteBarcodeMutation,
    DeleteBarcodeMutation,
    DeleteBarcodeMutationVariables
} from 'generated/graphql';
import { BarcodeDetails } from 'modules/Barcodes/Elements/BarcodeDetails';
import { useAuth } from 'context/AuthContext';
import { FC } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISingleBarcodeProps {
    id: string | any;
    router: NextRouter;
}

const SingleBarcode: FC<ISingleBarcodeProps> = ({ id, router }: ISingleBarcodeProps) => {
    let { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const { isLoading, data, error } = useGetBarcodeByIdQuery<GetBarcodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: parseInt(id)
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeleteBarcodeMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBarcodeMutation,
                _variables: DeleteBarcodeMutationVariables,
                _context: unknown
            ) => {
                router.back();
                if (!deleteLoading) {
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: (error) => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteBarcode = ({ id }: DeleteBarcodeMutationVariables) => {
        mutate({ id });
    };

    if (error) {
        showError(t('messages:error-getting-data'));
    }

    const breadsCrumb = [
        ...barcodesRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    return (
        <>
            <HeaderContent
                title={`${t('common:barcode')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        <Button onClick={() => alert('Edit')} type="primary">
                            {t('actions:edit')}
                        </Button>
                        <Button
                            loading={deleteLoading}
                            onClick={() => deleteBarcode({ id: parseInt(id) })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data?.barcode && !isLoading ? (
                    <BarcodeDetails details={data?.barcode} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SingleBarcode.displayName = 'SingleBarcode';

export { SingleBarcode };
