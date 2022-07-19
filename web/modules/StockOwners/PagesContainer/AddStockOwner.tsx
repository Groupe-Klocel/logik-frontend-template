import { HeaderContent } from '@components';
import { Layout } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AddStockOwnerForm } from '../Forms/AddStockOwnerForm';
import { addstockOwnerRoutes } from '../Static/stockOwnersRoutes';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export const AddStockOwner = () => {
    const { t } = useTranslation();
    const stockOwner = t('menu:stock-owner');

    const router = useRouter();

    return (
        <>
            <HeaderContent
                title={t('actions:add-a', { name: stockOwner })}
                routes={addstockOwnerRoutes}
                onBack={() => router.push(`/stock-owners`)}
            />
            <StyledPageContent>
                <AddStockOwnerForm />
            </StyledPageContent>
        </>
    );
};
