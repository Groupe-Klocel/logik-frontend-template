import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { usersRightsRoutes } from 'modules/Users/Static/usersRoutes'
import useTranslation from 'next-translate/useTranslation';
import { UsersRightsList } from 'modules/Users/Elements/UsersRightsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';


export interface IUsersRightsProps {

}

export const UsersRights: FC<IUsersRightsProps> = ({ }: IUsersRightsProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('menu:users-rights')} routes={usersRightsRoutes} />
				<UsersRightsList />
		</>
	);
}