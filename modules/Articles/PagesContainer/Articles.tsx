import { SearchOutlined } from '@ant-design/icons';
import { DrawerButton, LinkButton } from '@components';
import { Layout, Space } from 'antd';
import { ArticlesSearch } from 'components/common/dumb/DrawerItems/ArticlesSearch';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ArticlesList } from 'modules/Articles/Elements/ArticlesList';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { HeaderContent } from '../../../components/common/smart/HeaderContent/HeaderContent';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
`

export interface IArticlesProps {

}

const Articles: FC<IArticlesProps> = ({ }: IArticlesProps) => {
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

Articles.displayName = 'Articles';

export { Articles };

