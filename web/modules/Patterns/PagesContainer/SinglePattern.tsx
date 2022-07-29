import { ContentSpin, LinkButton } from '@components';
import { Layout, Space, Button, Modal } from 'antd';
import { patternsSubRoutes } from 'modules/Patterns/Static/patternsRoutes';
import useTranslation from 'next-translate/useTranslation';
import {
    useGetPatternByIdQuery,
    GetPatternByIdQuery,
    useDeletePatternMutation,
    DeletePatternMutation,
    DeletePatternMutationVariables
} from 'generated/graphql';

import { useAuth } from 'context/AuthContext';
import { FC, useEffect, useState } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError, showSuccess } from '@helpers';
import { PatternDetails } from '../Elements/PatternDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
    padding: 20px;
`;

export interface ISinglePatternProps {
    id: string | any;
    router: NextRouter;
}

const SinglePattern: FC<ISinglePatternProps> = ({ id, router }: ISinglePatternProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();
    const [Pattern, setPattern] = useState<any>();

    const { isLoading, data, error } = useGetPatternByIdQuery<GetPatternByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const { mutate, isLoading: deleteLoading } = useDeletePatternMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeletePatternMutation,
                _variables: DeletePatternMutationVariables,
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

    const deletePattern = ({ id }: DeletePatternMutationVariables) => {
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
        ...patternsSubRoutes,
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
        console.log(data?.pattern);
        const newData = {
            ...data?.pattern,
            companyName: data?.pattern?.stockOwner.name
        };

        delete newData.paths;
        delete newData.stockOwner;


        setPattern(newData);
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
                            title={t('actions:edit')}
                            path={`/patterns/edit/${id}`}
                            type="primary"
                        />
                        <Button
                            loading={deleteLoading}
                            onClick={() => deletePattern({ id: id })}
                        >
                            {t('actions:delete')}
                        </Button>
                    </Space>
                }
            />
            <StyledPageContent>
                {data?.pattern && !isLoading ? (
                    <PatternDetails details={Pattern} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

SinglePattern.displayName = 'SinglePattern';

export { SinglePattern };
