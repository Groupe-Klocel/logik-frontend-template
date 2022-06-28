import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { returnCodesRoutes } from 'modules/ReturnCodes/Static/returnCodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetReturnCodeByIdQuery, useGetReturnCodeByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditReturnCodeForm } from '../Forms/EditReturnCodeForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditReturnCodeProps {
    id: string | any;
    router: NextRouter;
}

const EditReturnCode: FC<EditReturnCodeProps> = ({ id, router }: EditReturnCodeProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetReturnCodeByIdQuery<GetReturnCodeByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...returnCodesRoutes,
        {
            breadcrumbName: `${data?.returnCode?.name}`
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
                title={`${t('menu:return-code')} ${data?.returnCode?.name}`}
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
                    <EditReturnCodeForm returnCodeId={id} details={data?.returnCode} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditReturnCode.displayName = 'EditReturnCode';

export { EditReturnCode };
