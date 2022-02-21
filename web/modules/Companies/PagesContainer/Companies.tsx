import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { companiesRoutes } from 'modules/Companies/Static/companiesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { CompaniesList } from 'modules/Companies/Elements/CompaniesList';
import styled from 'styled-components';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface ICompaniesProps {}

export const Companies: FC<ICompaniesProps> = ({}: ICompaniesProps) => {
    let { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:companies')}
                routes={companiesRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('common:company') })}
                        path="/add-company"
                    />
                }
            />
            <CompaniesList />
        </>
    );
};
