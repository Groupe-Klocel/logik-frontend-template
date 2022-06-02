import { HeaderContent } from '@components';
import { AddReturnCodeForm } from 'modules/ReturnCodes/Forms/AddReturnCodeForm';
import { addReturnCodeRoutes } from 'modules/ReturnCodes/Static/returnCodesRoutes';
import useTranslation from 'next-translate/useTranslation';

export const AddReturnCode = () => {
    const { t } = useTranslation('actions');
    return (
        <>
            <HeaderContent
                title={t('add2', { name: t('menu:return-code') })}
                routes={addReturnCodeRoutes}
            />
            <AddReturnCodeForm />
        </>
    );
};
