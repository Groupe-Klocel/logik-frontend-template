import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { addUserRoutes } from 'modules/Users/Static/usersRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddUserForm } from 'modules/Users/Elements/AddUserForm'
import styled from 'styled-components'

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddUserProps {

}

export const AddUser: FC<IAddUserProps> = ({ }: IAddUserProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('actions:add2', { name: t('common:user') })} routes={addUserRoutes} />
			<StyledPageContent>
				<AddUserForm />
			</StyledPageContent>
		</>
	);
}