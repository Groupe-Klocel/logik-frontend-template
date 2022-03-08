import { HeaderContent } from '@components';
import { usersRightsRoutes } from 'modules/Users/Static/usersRoutes';
import useTranslation from 'next-translate/useTranslation';
import { UsersRightsList } from 'modules/Users/Elements/UsersRightsList';

export const UsersRights = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:users-rights')} routes={usersRightsRoutes} />
            <UsersRightsList />
        </>
    );
};
