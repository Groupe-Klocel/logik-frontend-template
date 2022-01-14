import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { usersRightsRoutes } from 'modules/Users/Static/usersRoutes'
import useTranslation from 'next-translate/useTranslation';
import { UsersRightsList } from 'modules/Users/Elements/UsersRightsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IUsersRightsProps {

}

export const UsersRights: FC<IUsersRightsProps> = ({ }: IUsersRightsProps) => {
	let { t } = useTranslation('common')
	return (
		<>
			<HeaderContent title={t('users-rights')} routes={usersRightsRoutes} />
			<StyledPageContent>
				<UsersRightsList />
			</StyledPageContent>
		</>
	);
}