import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { addCompanyRoutes } from 'modules/Companies/Static/companiesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddCompanyForm } from 'modules/Companies/Elements/AddCompanyForm';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;


export const AddCompany = ()  => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('actions:add2', { name: t('common:company') })}
                routes={addCompanyRoutes}
            />
            <StyledPageContent>
                <AddCompanyForm />
            </StyledPageContent>
        </>
    );
};
