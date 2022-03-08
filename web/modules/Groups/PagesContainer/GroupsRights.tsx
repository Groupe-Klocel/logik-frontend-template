import { HeaderContent } from '@components';
import { groupsRightsRoutes } from 'modules/Groups/Static/groupsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GroupsRightsList } from 'modules/Groups/Elements/GroupsRightsList';

export const GroupsRights = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:groups-rights')} routes={groupsRightsRoutes} />
            <GroupsRightsList />
        </>
    );
};
