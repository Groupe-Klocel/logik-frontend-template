import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { packagingsRoutes } from 'modules/Packagings/Static/packagingsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetPackagingByIdQuery, useGetPackagingByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditPackagingForm } from '../Forms/EditPackagingForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditPackagingProps {
    id: string | any;
    router: NextRouter;
}

const EditPackaging: FC<EditPackagingProps> = ({ id, router }: EditPackagingProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

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

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    return (
        <>
            <HeaderContent
                title={`${t('menu:packaging')} ${data?.packaging?.name}`}
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
                    <EditPackagingForm packagingId={id} details={data?.packaging} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditPackaging.displayName = 'EditPackaging';

export { EditPackaging };
