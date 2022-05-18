import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addBlockRoutes } from 'modules/Cartography/Static/cartographyRoutes';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { AddBlockForm } from '../Forms/AddBlockForm';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddBlock = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent title={t('add2', { name: 'Block' })} routes={addBlockRoutes} />
            <StyledPageContent>
                <AddBlockForm />
            </StyledPageContent>
        </>
    );
};
