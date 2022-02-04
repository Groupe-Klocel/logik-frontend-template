import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { groupsRightsRoutes } from 'modules/Groups/Static/groupsRoutes'
import useTranslation from 'next-translate/useTranslation';
import { GroupsRightsList } from 'modules/Groups/Elements/GroupsRightsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IGroupsRightsProps {

}

export const GroupsRights: FC<IGroupsRightsProps> = ({ }: IGroupsRightsProps) => {
	let { t } = useTranslation('common')
	return (
		<>
			<HeaderContent title={t('groups-rights')} routes={groupsRightsRoutes} />
			<StyledPageContent>
				<GroupsRightsList />
			</StyledPageContent>
		</>
	);
}