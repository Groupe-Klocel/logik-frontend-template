import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { addGroupRoutes } from 'modules/Groups/Static/groupsRoutes'
import { AddGroupForm } from 'modules/Groups/Elements/AddGroupForm'
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components'

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddGroupProps {

}

export const AddGroup: FC<IAddGroupProps> = ({ }: IAddGroupProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add-group')} routes={addGroupRoutes} />
			<StyledPageContent>
				<AddGroupForm />
			</StyledPageContent>
		</>
	);
}