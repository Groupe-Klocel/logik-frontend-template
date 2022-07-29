import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { GetPurchaseOrderLineByIdQuery, useGetPurchaseOrderLineByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditPurchaseOrderLineForm } from '../Forms/EditPurchaseOrderLineForm';
import { purchaseOrderLineSubRoutes } from '../Static/purchaseOrderLineRoutes';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface IEditPurchaseOrderLineProps {
    id: string | any;
    router: NextRouter;
}

const EditPurchaseOrderLine: FC<IEditPurchaseOrderLineProps> = ({ id, router }: IEditPurchaseOrderLineProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetPurchaseOrderLineByIdQuery<GetPurchaseOrderLineByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...purchaseOrderLineSubRoutes,
        {
            breadcrumbName: `${id}`
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
                title={`${t('common:article')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                // actionsRight={
                //   <Space>
                //     <Button onClick={()=> alert()} type="primary">
                //         {t('actions:update')}
                //     </Button>
                //     <Button onClick={() => router.back()}>
                //         {t('actions:cancel')}
                //     </Button>
                //   </Space>
                // }
            />
            <StyledPageContent>
                {data && !isLoading ? (
                    <EditPurchaseOrderLineForm id={id} details={data?.purchaseOrderLine} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditPurchaseOrderLine.displayName = 'EditPurchaseOrderLine';

export { EditPurchaseOrderLine };
