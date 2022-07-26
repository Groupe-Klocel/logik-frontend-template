import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleArticle } from 'modules/Articles/PagesContainer/SingleArticle';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';


type PageComponent = FC & { layout: typeof MainLayout }

const ArticlePage: PageComponent = () => {
	const router = useRouter()
	const { aid } = router.query

	return (
		<>
			<AppHead title={META_DEFAULTS.title} />
			<SingleArticle router={router} aId={aid!} />
		</>
	)
}

ArticlePage.layout = MainLayout

export default ArticlePage
