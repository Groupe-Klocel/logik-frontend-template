import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { addArticleRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddArticleForm} from 'modules/Articles/Elements/AddArticleForm'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IAddArticleProps {

}

export const AddArticle: FC<IAddArticleProps> = ({ }: IAddArticleProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add2',{name:"Article"})} routes={addArticleRoutes} />
			<StyledPageContent>
				<AddArticleForm />
			</StyledPageContent>
		</>
	);
}