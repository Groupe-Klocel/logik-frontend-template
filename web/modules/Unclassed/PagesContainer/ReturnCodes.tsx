import { HeaderContent } from '@components';
import { returnCodesRoutes } from 'modules/Unclassed/Static/routes';
import useTranslation from 'next-translate/useTranslation';
import { ReturnCodesList } from 'modules/Unclassed/Elements/ReturnCodesList';


export const ReturnCodes = ()  => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:return-codes')} routes={returnCodesRoutes} />
            <ReturnCodesList />
        </>
    );
};
