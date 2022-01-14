import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { usersRoutes } from 'modules/Users/Static/usersRoutes'
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface ISingleUserProps {
	username: string
	userId: string
}

export const SingleUser: FC<ISingleUserProps> = ({ username, userId }: ISingleUserProps) => {
	let { t } = useTranslation('common')
	
	// NEED TO FETCH SPECIFIC USER DATA BY ID TO DISPLAY USER DATA 

	const singleUserRoutes = [...usersRoutes, {
		breadcrumbName: username
	}]

	return (
		<>
			<HeaderContent title={username} routes={singleUserRoutes} actions={
				<>
					<LinkButton title={t('new-user')} path='/new-user' />
					<LinkButton title={t('new-user')} path='/new-user' />
					<LinkButton title={t('new-user')} path='/new-user' />
				</>
			} />
			<StyledPageContent>
				<UserDetails />
			</StyledPageContent>
		</>
	);
}