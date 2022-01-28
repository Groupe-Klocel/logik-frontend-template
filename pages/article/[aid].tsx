import { AppHead } from '@components';
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
			<AppHead title="Bee V2" />
			<SingleArticle router={router} aId={aid!} />
		</>
	)
}

ArticlePage.layout = MainLayout

export default ArticlePage

// // This function gets called at build time
// export async function getStaticProps() {
// 	console.log('id ',aid)
// 	const { graphqlRequestClient } = useAuth()
// 	const { isLoading, data, error } = useGetArticleByIdQuery<Partial<GetArticleByIdQuery>, Error>(graphqlRequestClient, {
// 		id: aid,
// 	})
// 	const article = data?.article
// 	// By returning { props: { posts } }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 		props: {
// 			article,
// 		},
// 	}
// }
