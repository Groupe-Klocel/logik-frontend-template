import { HeaderContent } from '@components';
import { addUserRoutes } from 'modules/Users/Static/usersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { AddUserForm } from 'modules/Users/Elements/AddUserForm';

export const AddUser = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('actions:add2', { name: t('common:user') })}
                routes={addUserRoutes}
            />
            <AddUserForm />
        </>
    );
};
