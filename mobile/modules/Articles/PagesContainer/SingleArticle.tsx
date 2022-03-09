import { LinkButton, ScreenSpin, DetailsList, Page } from '@components';
import { Layout, Space } from 'antd';
import { articlesSubRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { GetArticleByIdQuery, useGetArticleByIdQuery } from 'generated/graphql';
import { useAuth } from 'context/AuthContext';
import { FC } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';

// const StyledPageContent = styled(Layout.Content)`
// 	margin: 15px 30px ;
// 	padding: 20px
// `

export interface ISingleArticleProps {
	aId: string | any;
	router: NextRouter;
}

const SingleArticle: FC<ISingleArticleProps> = ({ aId, router }: ISingleArticleProps) => {
	const { t } = useTranslation()

	const { graphqlRequestClient } = useAuth()

	aId = parseInt(aId);

	const { isLoading, data, error } = useGetArticleByIdQuery<GetArticleByIdQuery, Error>(graphqlRequestClient, {
		id: aId,
	})
	
	return (
		<>
			<HeaderContent
				title={`${t('common:article')} ${aId}`}
			/>
			<Page>
				{data?.article && !isLoading ?
					<DetailsList details={data?.article} />
					:
					<ScreenSpin />
				}
			</Page>
		</>
	);
}

SingleArticle.displayName = 'SingleArticle';

export { SingleArticle };
