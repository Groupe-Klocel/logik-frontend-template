import { AppTable, LinkButton, ScreenSpin } from '@components';
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, useArticles } from '@helpers';
import { EyeTwoTone } from '@ant-design/icons';
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
				...pagination,
				total: data?.articles?.count,
			})
		}
	}, [data])


	// to refactor to be automatique when fetching data 
	const columns = [
		{
			title: t("common:name"),
			dataIndex: 'name',
			key: 'name',
			index: 0,
		},
		{
			title: t("common:additionalDescription"),
			dataIndex: 'additionalDescription',
			key: 'additionalDescription',
			index: 1,
		},
		{
			title: t("forms:code"),
			dataIndex: 'code',
			key: 'code',
			index: 2,
		},
		{
			title: t("common:status"),
			dataIndex: 'status',
			key: 'status',
			index: 3,
		},
		{
			title: t("common:length"),
			dataIndex: 'length',
			key: 'length',
			index: 4,
		},
		{
			title: t("common:width"),
			dataIndex: 'width',
			key: 'width',
			index: 5,
		},
		{
			title: t("common:height"),
			dataIndex: 'height',
			key: 'height',
			index: 6,
		},
		{
			title: t("common:baseUnitWeight"),
			dataIndex: 'baseUnitWeight',
			key: 'baseUnitWeight',
			index: 7,
		},
		{
			title: t("common:boxWeight"),
			dataIndex: 'boxWeight',
			key: 'boxWeight',
			index: 8,
		},
		{
			key: 'actions',
			width: 50,
			index: 9,
			render: (record: { id: string }) => (
				<LinkButton icon={<EyeTwoTone />} path={pathParams(record.id)} />
				)
		}
	]

	const pathParams = (id: string) => { return { pathname: '/article/[aid]', query: { aid: id } } }

	return (
		<>
			{articles &&
				<AppTable
					columns={columns}
					data={articles!.results}
					scroll={{ x: 800 }}
					pagination={pagination}
					setPagination={onChangePagination}
				/>

			}
		</>
	);
}

export { ArticlesList };

