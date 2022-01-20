import { FC, useState, useCallback } from 'react'
import { Layout, Space } from 'antd'
import { HeaderContent } from '../../../components/common/Smart/HeaderContent/HeaderContent'
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { ArticlesList } from 'modules/Articles/Elements/ArticlesList'
import styled from 'styled-components'
import { LinkButton } from 'components/common/Dumb/Buttons/LinkButton';
import { useDrawerDispatch } from 'helpers/context/DrawerContext';
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

	const dispatchDrawer = useDrawerDispatch();

	const openSearchDrawer = useCallback(
		() => dispatchDrawer({
			type: 'OPEN_DRAWER',
			title: t('actions:search'),
			comfirmButtonTitle: t('actions:search'),
			comfirmButton: true,
			content: <ArticlesSearch onSearch={setSearch} />,
			onComfirm: () => handleConfirmation(),
		}),
		[dispatchDrawer]
	)

	const closeDrawer = useCallback(() => dispatchDrawer({ type: 'CLOSE_DRAWER' }), [
		dispatchDrawer,
	]);
	//	SEARCH DRAWER 
	const [search, setSearch] = useState('');

	const onSearch = () => {
		console.log();
	};
	async function handleConfirmation() {
		closeDrawer()
	}



	return (
		<>
			<HeaderContent title={t('common:articles')} routes={articlesSubRoutes} actions={
				<Space>
					<DrawerButton icon={< SearchOutlined />} onClick={() => openSearchDrawer()} />
					<LinkButton title={t('actions:add2', { name: t('common:article') })} path='/add-article' type='primary' />
				</Space>
			} />
			<StyledPageContent>
				<ArticlesList />
			</StyledPageContent>
		</>
	);
}