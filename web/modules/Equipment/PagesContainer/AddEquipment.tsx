import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addEquipmentRoutes } from 'modules/Equipment/Static/equipmentRoutes';
import { AddEquipmentForm } from '../Forms/AddEquipmentForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddEquipment = () => {
    const { t } = useTranslation('actions');
    const router = useRouter();
    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:equipment-piece') })}
                routes={addEquipmentRoutes}
                onBack={() => router.back()}
            />
            <StyledPageContent>
                <AddEquipmentForm />
            </StyledPageContent>
        </>
    );
};
