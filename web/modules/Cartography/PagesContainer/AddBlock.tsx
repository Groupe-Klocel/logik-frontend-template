import { Layout } from 'antd';
import { HeaderContent } from '@components';
<<<<<<< HEAD
<<<<<<< HEAD:web/modules/Cartography/PagesContainer/AddBlock.tsx
import { addBlockRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import { AddBlockForm } from '../Forms/AddBlockForm';
=======
>>>>>>> master:web/modules/Buildings/PageContainer/AddBuilding.tsx
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { AddBuildingsForm } from '../Forms/AddBuildingForm';
import { addBuildingRoutes } from '../Static/routes';
=======
import { addBlockRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import { AddBlockForm } from '../Forms/AddBlockForm';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
>>>>>>> master

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

<<<<<<< HEAD
<<<<<<< HEAD:web/modules/Cartography/PagesContainer/AddBlock.tsx
=======
>>>>>>> master
export const AddBlock = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: t('menu:block') })} routes={addBlockRoutes} />
            <StyledPageContent>
                <AddBlockForm />
<<<<<<< HEAD
=======
export const AddBuilding = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add-building')} routes={addBuildingRoutes} />
            <StyledPageContent>
                <AddBuildingsForm />
>>>>>>> master:web/modules/Buildings/PageContainer/AddBuilding.tsx
=======
>>>>>>> master
            </StyledPageContent>
        </>
    );
};
