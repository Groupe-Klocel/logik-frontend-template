import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { groupsRoutes } from 'modules/Groups/Static/groupsRoutes'
import useTranslation from 'next-translate/useTranslation';
import { GroupsList } from 'modules/Groups/Elements/GroupsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IGroupsProps {

}

export const Groups: FC<IGroupsProps> = ({ }: IGroupsProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('groups')} routes={groupsRoutes} actions={
				<LinkButton title={t('add-group')} path='/add-group' />
			} />
			<StyledPageContent>
				<GroupsList />
			</StyledPageContent>
		</>
	);
}