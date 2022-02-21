import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { groupOfUsersRoutes } from 'modules/Groups/Static/groupsRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GroupOfUsersList } from 'modules/Groups/Elements/GroupOfUsersList';
import styled from 'styled-components';

export interface IGroupOfUsersProps {}

export const GroupOfUsers: FC<IGroupOfUsersProps> = ({}: IGroupOfUsersProps) => {
    let { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:groups-of-users')} routes={groupOfUsersRoutes} />
            <GroupOfUsersList />
        </>
    );
};
