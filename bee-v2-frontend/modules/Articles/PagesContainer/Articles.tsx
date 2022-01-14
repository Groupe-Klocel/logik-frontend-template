import { FC, useState } from 'react'
import { Layout, Space } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { ArticlesList } from 'modules/Articles/Elements/ArticlesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';
import { useDrawerUpdater } from 'helpers/context/DrawerContext';
import { DrawerButton } from 'components/common/Dumb/Buttons/DrawerButton';
import { SearchOutlined } from '@ant-design/icons';
import { ArticlesSearch } from 'components/common/Dumb/DrawerItems/ArticlesSearch';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IArticlesProps {

}

export const Articles: FC<IArticlesProps> = ({ }: IArticlesProps) => {
	let { t } = useTranslation()
	const setDrawerOptions = useDrawerUpdater();

	//	SEARCH DRAWER 
	const [search, setSearch] = useState('');
	
	const onSearch = () => {
		console.log();
	};

	
	async function handleConfirmation(context) {
		console.log("context :",context)
		searchDrawerProps.onClose()
	}
	
	const searchDrawerProps = {
		context: search,
		title: "Search",
		placement: 'right',
		cancelButtonTitle: t('actions:cancel'),
		confirmButtonTitle: t('actions:search'),
		content: <ArticlesSearch onSearch={setSearch}/>,
		onConfirm: (_:any, context: any) => handleConfirmation(context),
		onClose: () => setDrawerOptions({ isOpen: false })
	}
	
	return (
		<>
			<HeaderContent title={t('common:articles')} routes={articlesSubRoutes} actions={
				<Space>
					<DrawerButton icon={< SearchOutlined />} onClick={() => setDrawerOptions({ isOpen: true, drawerProps: searchDrawerProps })} title={t('actions:search')} />
					<LinkButton title={t('actions:add2', { name: t('common:article') })} path='/add-article' type='primary' />
				</Space>
			} />
			<StyledPageContent>
				<ArticlesList />
			</StyledPageContent>
		</>
	);
}