import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { groupOfUsersRoutes } from 'modules/Groups/Static/groupsRoutes'
import useTranslation from 'next-translate/useTranslation';
import { GroupOfUsersList } from 'modules/Groups/Elements/GroupOfUsersList'
import styled from 'styled-components'

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IGroupOfUsersProps {

}

export const GroupOfUsers: FC<IGroupOfUsersProps> = ({ }: IGroupOfUsersProps) => {
	let { t } = useTranslation('common')
	return (
		<>
			<HeaderContent title={t('groups-rights')} routes={groupOfUsersRoutes} />
			<StyledPageContent>
				<GroupOfUsersList />
			</StyledPageContent>
		</>
	);
}