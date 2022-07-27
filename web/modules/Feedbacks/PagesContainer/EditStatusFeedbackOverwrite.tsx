import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import {
    GetStatusFeedbackOverwriteByIdQuery,
    useGetStatusFeedbackOverwriteByIdQuery
} from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { statusFeedbackOverwritesRoutes } from '../Static/feedbacksRoutes';
import { EditStatusFeedbackOverwriteForm } from '../Forms/EditStatusFeedbackOverwriteForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditStatusFeedbackOverwriteProps {
    id: string | any;
    router: NextRouter;
}

const EditStatusFeedbackOverwrite: FC<EditStatusFeedbackOverwriteProps> = ({
    id,
    router
}: EditStatusFeedbackOverwriteProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetStatusFeedbackOverwriteByIdQuery<
        GetStatusFeedbackOverwriteByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...statusFeedbackOverwritesRoutes,
        {
            breadcrumbName: `${data?.statusFeedbackOverwrite?.objectTypeText}/${data?.statusFeedbackOverwrite?.statusText}`
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
                title={`${t('menu:status-feedback-overwrite')} ${
                    data?.statusFeedbackOverwrite?.objectTypeText
                }/${data?.statusFeedbackOverwrite?.statusText}`}
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
                    <EditStatusFeedbackOverwriteForm
                        statusFeedbackOverwriteId={id}
                        details={data?.statusFeedbackOverwrite}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditStatusFeedbackOverwrite.displayName = 'EditStatusFeedbackOverwrite';

export { EditStatusFeedbackOverwrite };
