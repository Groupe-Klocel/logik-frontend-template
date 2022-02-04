import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { returnCodesRoutes } from 'modules/Unclassed/Static/routes'
import useTranslation from 'next-translate/useTranslation';
import { ReturnCodesList } from 'modules/Unclassed/Elements/ReturnCodesList'
import styled from 'styled-components'

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IReturnCodesProps {

}

export const ReturnCodes: FC<IReturnCodesProps> = ({ }: IReturnCodesProps) => {
	let { t } = useTranslation()
	return (
		<>
			<HeaderContent title={t('common:return-codes')} routes={returnCodesRoutes} />
			<StyledPageContent>
				<ReturnCodesList />
			</StyledPageContent>
		</>
	);
}