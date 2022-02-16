import { AppTable, LinkButton } from '@components';
import { Space, Button } from 'antd'
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, useArticles } from '@helpers';
import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
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
		},
		{
			title: t("common:additionalDescription"),
			dataIndex: 'additionalDescription',
			key: 'additionalDescription',
		},
		{
			title: t("forms:code"),
			dataIndex: 'code',
			key: 'code',
		},
		{
			title: t("common:status"),
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: t("common:length"),
			dataIndex: 'length',
			key: 'length',
		},
		{
			title: t("common:width"),
			dataIndex: 'width',
			key: 'width',
		},
		{
			title: t("common:height"),
			dataIndex: 'height',
			key: 'height',
		},
		{
			title: t("forms:baseUnitWeight"),
			dataIndex: 'baseUnitWeight',
			key: 'baseUnitWeight',
		},
		{
			title: t("forms:boxWeight"),
			dataIndex: 'boxWeight',
			key: 'boxWeight',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: string }) => (
				<Space>
					<LinkButton icon={<EyeTwoTone />} path={pathParams(record.id)} />
					<Button icon={<DeleteOutlined />} danger onClick={() => alert(`delete article N° ${record.id}`)} />
				</Space>
			)
		}
	]

	const pathParams = (id: string) => { return { pathname: '/article/[aid]', query: { aid: id } } }

	return (
		<>
			{articles &&
				<AppTable
					type="articles"
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

