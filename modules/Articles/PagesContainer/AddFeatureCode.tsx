import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent'
import { addFeatureCodeRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureCodeForm} from 'modules/Articles/Elements/AddFeatureCodeForm'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddFeatureCodeProps {

}

export const AddFeatureCode: FC<IAddFeatureCodeProps> = ({ }: IAddFeatureCodeProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add2',{name:"Feature Code"})} routes={addFeatureCodeRoutes} />
			<StyledPageContent>
				<AddFeatureCodeForm />
			</StyledPageContent>
		</>
	);
}