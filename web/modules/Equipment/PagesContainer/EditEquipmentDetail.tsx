import { ContentSpin } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { GetEquipmentDetailByIdQuery, useGetEquipmentDetailByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC, useEffect } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';
import { showError } from '@helpers';
import { equipmentRoutes } from '../Static/equipmentRoutes';
import { EditEquipmentDetailForm } from '../Forms/EditEquipmentDetailForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 0px 30px 50px 30px;
    padding: 0px 20px;
`;

export interface EditEquipmentDetailProps {
    id: string | any;
    router: NextRouter;
}

const EditEquipmentDetail: FC<EditEquipmentDetailProps> = ({
    id,
    router
}: EditEquipmentDetailProps) => {
    const { t } = useTranslation();

    const { graphqlRequestClient } = useAuth();

    const { isLoading, data, error } = useGetEquipmentDetailByIdQuery<
        GetEquipmentDetailByIdQuery,
        Error
    >(graphqlRequestClient, {
        id: id
    });

    const breadsCrumb = [
        ...equipmentRoutes,
        {
            breadcrumbName: `${data?.equipmentDetail?.preparationMode}`
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
                title={`${t('menu:equipment-detail')}: ${data?.equipmentDetail?.preparationMode}`}
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
                    <EditEquipmentDetailForm
                        equipmentDetailId={id}
                        details={data?.equipmentDetail}
                    />
                ) : (
                    <ContentSpin />
                )}
            </StyledPageContent>
        </>
    );
};

EditEquipmentDetail.displayName = 'EditEquipmentDetail';

export { EditEquipmentDetail };
