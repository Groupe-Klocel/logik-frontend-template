import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addStockStatusRoutes } from 'modules/Stocks/Static/stocksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddStockStatusForm } from 'modules/Stocks/Elements/AddStockStatusForm';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddStockStatus = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <HeaderContent title={t('stock-statuses')} routes={addStockStatusRoutes} />
            <StyledPageContent>
                <AddStockStatusForm />
            </StyledPageContent>
        </>
    );
};
