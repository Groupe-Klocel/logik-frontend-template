import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { addArticleSetRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddArticleSetForm} from 'modules/Articles/Elements/AddArticleSetForm'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddArticleSetProps {

}

export const AddArticleSet: FC<IAddArticleSetProps> = ({ }: IAddArticleSetProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add2',{name:"Article Set"})} routes={addArticleSetRoutes} />
			<StyledPageContent>
				<AddArticleSetForm />
			</StyledPageContent>
		</>
	);
}