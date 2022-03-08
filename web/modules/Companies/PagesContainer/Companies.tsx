import { HeaderContent } from '@components';
import { companiesRoutes } from 'modules/Companies/Static/companiesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { CompaniesList } from 'modules/Companies/Elements/CompaniesList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export const Companies = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:companies')}
                routes={companiesRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('common:company') })}
                        path="/add-company"
                        type="primary"
                    />
                }
            />
            <CompaniesList />
        </>
    );
};
