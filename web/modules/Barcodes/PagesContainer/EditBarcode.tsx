import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { barcodesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetBarcodeByIdQuery, useGetBarcodeByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditBarcodeForm } from '../Forms/EditBarcodeForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditBarcodeProps {
    id: string | any;
    router: NextRouter;
}

const EditBarcode: FC<IEditBarcodeProps> = ({ id, router }: IEditBarcodeProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetBarcodeByIdQuery<GetBarcodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...barcodesSubRoutes,
        {
            breadcrumbName: `${data?.barcode?.name}`
        }
    ];

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    return (
        <>
            <HeaderContent
                title={`${t('menu:barcode')} ${data?.barcode?.name}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditBarcodeForm barcodeId={id} details={data?.barcode} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditBarcode.displayName = 'EditBarcode';

export { EditBarcode };
