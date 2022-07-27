import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { GetFeedbackOverwriteByIdQuery, useGetFeedbackOverwriteByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { feedbackOverwritesRoutes } from '../Static/feedbacksRoutes';
import { EditFeedbackOverwriteForm } from '../Forms/EditFeedbackOverwriteForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditFeedbackOverwriteProps {
    id: string | any;
    router: NextRouter;
}

const EditFeedbackOverwrite: FC<EditFeedbackOverwriteProps> = ({
    id,
    router
}: EditFeedbackOverwriteProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetFeedbackOverwriteByIdQuery<
        GetFeedbackOverwriteByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...feedbackOverwritesRoutes,
        {
            breadcrumbName: `${data?.feedbackOverwrite?.stockOwner.name}/${data?.feedbackOverwrite?.movementCodeText}`
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
                title={`${t('menu:feedbackOverwrite')} ${
                    data?.feedbackOverwrite?.stockOwner.name
                }/${data?.feedbackOverwrite?.movementCodeText}`}
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
                    <EditFeedbackOverwriteForm
                        feedbackOverwriteId={id}
                        details={data?.feedbackOverwrite}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditFeedbackOverwrite.displayName = 'EditFeedbackOverwrite';

export { EditFeedbackOverwrite };
