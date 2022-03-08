import { HeaderContent } from '@components';
import { groupOfUsersRoutes } from 'modules/Groups/Static/groupsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GroupOfUsersList } from 'modules/Groups/Elements/GroupOfUsersList';

export const GroupOfUsers = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:groups-of-users')} routes={groupOfUsersRoutes} />
            <GroupOfUsersList />
        </>
    );
};
