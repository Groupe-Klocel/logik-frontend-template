import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { packagingsRoutes } from 'modules/Packagings/Static/packagingsRoutes'
import useTranslation from 'next-translate/useTranslation';
import { PackagingsList } from 'modules/Packagings/Elements/PackagingsList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IPackagingsProps {

}

export const Packagings: FC<IPackagingsProps> = ({ }: IPackagingsProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('packagings')} routes={packagingsRoutes} actions={
				<LinkButton title={t('add-packaging')} path='/add-packaging' />
			} />
			<StyledPageContent>
				<PackagingsList />
			</StyledPageContent>
		</>
	);
}