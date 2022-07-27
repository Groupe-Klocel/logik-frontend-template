import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addEquipmentDetailRoutes } from 'modules/Equipment/Static/equipmentRoutes';
import { AddEquipmentDetailForm } from '../Forms/AddEquipmentDetailForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddEquipmentDetail = () => {
    const { t } = useTranslation('actions');
    const router = useRouter();
    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:equipment-detail') })}
                routes={addEquipmentDetailRoutes}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                <AddEquipmentDetailForm />
            </StyledPageContent>
        </>
    );
};
