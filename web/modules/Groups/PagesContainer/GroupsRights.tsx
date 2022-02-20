import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { groupsRightsRoutes } from 'modules/Groups/Static/groupsRoutes'
import useTranslation from 'next-translate/useTranslation';
import { GroupsRightsList } from 'modules/Groups/Elements/GroupsRightsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export interface IGroupsRightsProps {

}

export const GroupsRights: FC<IGroupsRightsProps> = ({ }: IGroupsRightsProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:groups-rights')} routes={groupsRightsRoutes} />
				<GroupsRightsList />
		</>
	);
}