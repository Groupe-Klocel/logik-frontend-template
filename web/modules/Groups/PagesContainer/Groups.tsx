import { HeaderContent } from '@components';
import { groupsRoutes } from 'modules/Groups/Static/groupsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GroupsList } from 'modules/Groups/Elements/GroupsList';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export const Groups = ()  => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:groups')}
                routes={groupsRoutes}
                actionsRight={
                    <LinkButton title={t('menu:add-group')} path="/add-group" type="primary" />
                }
            />
            <GroupsList />
        </>
    );
};
