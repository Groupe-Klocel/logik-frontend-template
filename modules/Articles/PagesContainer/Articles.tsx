import { SearchOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { LinkButton } from '@components';
import { Layout, Space, Form } from 'antd';
import { ArticlesSearch } from 'components/common/smart/DrawerItems/ArticlesSearch';
import { useDrawerDispatch } from 'context/DrawerContext';
import { ArticlesList } from 'modules/Articles/Elements/ArticlesList';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useState, useEffect } from 'react';
import { HeaderContent } from '@components';


export interface IArticlesProps {}

const Articles: FC<IArticlesProps> = ({ }: IArticlesProps) => {
	let { t } = useTranslation()

	const [search, setSearch] = useState({});

	//	SEARCH DRAWER 
	const [formSearch] = Form.useForm();

	const dispatchDrawer = useDrawerDispatch();

	const openSearchDrawer = useCallback(
		() => dispatchDrawer({
			type: 'OPEN_DRAWER',
			title: t('actions:search'),
			comfirmButtonTitle: t('actions:search'),
			comfirmButton: true,
			submit: true,
			content: <ArticlesSearch form={formSearch} />,
			onComfirm: () => handleSubmit(),
		}),
		[dispatchDrawer]
	)

	const closeDrawer = useCallback(() => dispatchDrawer({ type: 'CLOSE_DRAWER' }), [
		dispatchDrawer,
	]);

	const handleSubmit = () => {
		formSearch
			.validateFields()
			.then(() => {
				// Here make api call of something else
				console.log(formSearch.getFieldsValue(true))
				setSearch(formSearch.getFieldsValue(true))
				closeDrawer()
			})
			.catch((err) => console.log(err));
	};
 
	return (
		<>
			<HeaderContent title={t('common:articles')} routes={articlesSubRoutes}
			actionsRight={
				<Space>
					<Button icon={< SearchOutlined />} onClick={() => openSearchDrawer()} />
					<LinkButton title={t('actions:add2', { name: t('common:article') })} path='/add-article' type='primary' />
				</Space>
			} />
				<ArticlesList searchCriteria={search} />
		</>
	);
}

Articles.displayName = 'Articles';

export { Articles };

	
