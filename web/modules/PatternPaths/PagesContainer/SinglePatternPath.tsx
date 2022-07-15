import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Modal } from 'antd';
import { patternPathsSubRoutes } from 'modules/PatternPaths/Static/patternPathRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    useGetPatternPathByIdQuery,
    GetPatternPathByIdQuery,
    useDeletePatternPathMutation,
    DeletePatternPathMutation,
    DeletePatternPathMutationVariables
} from 'generated/graphql';

import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { PatternPathDetails } from '../Elements/PatternPathDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISinglePatternPathProps {
    id: string | any;
    router: NextRouter;
}

const SinglePatternPath: FC<ISinglePatternPathProps> = ({ id, router }: ISinglePatternPathProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const [PatternPath, setPatternPath] = useState<any>();

    const { isLoading, data, error } = useGetPatternPathByIdQuery<GetPatternPathByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeletePatternPathMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeletePatternPathMutation,
                _variables: DeletePatternPathMutationVariables,
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

    const deletePatternPath = ({ id }: DeletePatternPathMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const breadsCrumb = [
        ...patternPathsSubRoutes,
        {
            breadcrumbName: `${id}`
        }
    ];

    useEffect(() => {
        if (error) {
            showError(t('messages:error-getting-data'));
        }
    }, [error]);

    useEffect(() => {
        console.log(data?.patternPath);
        const newData = {
            ...data?.patternPath,
        };

        setPatternPath(newData);
    }, [data])

    return (
        <>
            <HeaderContent
                title={`${t('common:patternStatus')} ${id}`}
                routes={breadsCrumb}
                onBack={() => router.back()}
                actionsRight={
                    <Space>
                        <LinkButton
                            title={t('actions:manage-location')}
                            path={`/pattern-paths/manage/${id}`}
                            type="primary"
                        />
                        <LinkButton
                            title={t('actions:edit')}
                            path={`/pattern-paths/edit/${id}`}
                            type="primary"
                        />
                        <Button
                            loading={deleteLoading}
                            onClick={() => deletePatternPath({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data?.patternPath && !isLoading ? (
                    <PatternPathDetails details={PatternPath} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SinglePatternPath.displayName = 'SinglePatternPath';

export { SinglePatternPath };
