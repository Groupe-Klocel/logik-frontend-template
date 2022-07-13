import { HeaderContent } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { AddStockOwnerForm } from '../Forms/AddStockOwnerForm';
import { addstockOwnerRoutes } from '../Static/stockOwnersRoutes';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddStockOwner = () => {
    const { t } = useTranslation();
    const stockOwner = t('common:stock-owner');

    return (
        <>
            <HeaderContent
                title={t('actions:add2', { name: stockOwner })}
                routes={addstockOwnerRoutes}
            />
            <StyledPageContent>
                <AddStockOwnerForm />
            </StyledPageContent>
        </>
    );
};
