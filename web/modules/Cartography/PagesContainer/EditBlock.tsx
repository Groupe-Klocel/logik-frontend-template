import { ContentSpin } from '@components';
import { Layout } from 'antd';
import { blocksRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetBlockByIdQuery, useGetBlockByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { EditBlockForm } from '../Forms/EditBlockForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditBlockProps {
    id: string | any;
    router: NextRouter;
}

const EditBlock: FC<EditBlockProps> = ({ id, router }: EditBlockProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetBlockByIdQuery<GetBlockByIdQuery, Error>(
        graphqlRequestClient,
        {
            id: id
        }
    );

    const breadsCrumb = [
        ...blocksRoutes,
        {
            breadcrumbName: `${data?.block?.name}`
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
                title={`${t('menu:block')} ${data?.block?.name}`}
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
                    <EditBlockForm blockId={id} details={data?.block} />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditBlock.displayName = 'EditBlock';

export { EditBlock };
