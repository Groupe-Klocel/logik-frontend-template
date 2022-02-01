import { AppTable, LinkButton, ScreenSpin } from '@components';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, useArticles } from '@helpers';
import { useAuth } from 'context/AuthContext';
import { GetAllArticlesQuery, useGetAllArticlesQuery } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect, useCallback } from 'react'

interface IArticles {
	count: number;
	itemsPerPage: number;
	results: Array<any>;
	totalPages: number;
}

interface IPagination {
	total: number | undefined;
	current: number;
	itemsPerPage: number;
}

export interface IArticlesListProps {
	searchCriteria?: any
}

const ArticlesList = ({ searchCriteria }: IArticlesListProps) => {
	const { t } = useTranslation()
	const { graphqlRequestClient } = useAuth()

	// Local State init 
	const [articles, setArticles] = useState<IArticles | undefined>(undefined)
	const [pagination, setPagination] = useState<IPagination>({
		total: undefined,
		current: DEFAULT_PAGE_NUMBER,
		itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
	})

	const { isLoading, data, error } = useArticles(searchCriteria, pagination.current, pagination.itemsPerPage)

	// make wrapper function to give child
	const onChangePagination = useCallback((currentPage, itemsPerPage) => {
		// Re fetch data for new current page or items per page 
		setPagination({
			...pagination,
			current: currentPage,
			itemsPerPage: itemsPerPage,
		});
	}, [setPagination]);

	// For pagination
	useEffect(() => {
		if (data) {
			setArticles(data?.articles)
			setPagination({
				total: data?.articles?.count,
				current: 1,
				itemsPerPage: 20,
			})
		}
		console.log("data from api", data)
		console.log("articles", articles)
		console.log("pagination", pagination)
	}, [data])


	// to refactor to be automatique when fetching data 
	const columns = [
		{
			title: t("common:name"),
			dataIndex: 'name',
			key: 'name',
			fixed: true,
			disabled: false,
		},
		{
			title: t("common:additionalDescription"),
			dataIndex: 'additionalDescription',
			key: 'additionalDescription',
			disabled: true,
		},
		{
			title: t("forms:code"),
			dataIndex: 'code',
			key: 'code',
			disabled: true,
		},
		{
			title: t("common:status"),
			dataIndex: 'status',
			key: 'status',
			disabled: false,
		},
		{
			title: t("common:length"),
			dataIndex: 'length',
			key: 'length',
			disabled: false,
		},
		{
			title: t("common:width"),
			dataIndex: 'width',
			key: 'width',
			disabled: false,
		},
		{
			title: t("common:height"),
			dataIndex: 'height',
			key: 'height',
			disabled: false,
		},
		{
			title: t("common:baseUnitWeight"),
			dataIndex: 'baseUnitWeight',
			key: 'baseUnitWeight',
			disabled: false,
		},
		{
			title: t("common:boxWeight"),
			dataIndex: 'boxWeight',
			key: 'boxWeight',
			disabled: false,
		}
	]

	const pathParams = (id: string) => { return { pathname: '/article/[aid]', query: { aid: id } } }


	return (
		<>
			{articles && !isLoading ? (
				<AppTable
					columns={columns}
					data={articles!.results}
					scroll={{ x: 800 }}
					isLoading={isLoading}
					pagination={pagination}
					setPagination={onChangePagination}
				/>
			) : (
				<ScreenSpin />
			)
			}
		</>
	);
}

export { ArticlesList };

