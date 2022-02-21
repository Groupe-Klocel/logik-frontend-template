import { AppTable, LinkButton } from '@components';
import { Space, Button } from 'antd'
import { DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, useArticles, pathParams, showError , DataQueryType, PaginationType} from '@helpers';
import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect, useCallback } from 'react'

export interface IArticlesListProps {
	searchCriteria?: any
}

const ArticlesList = ({ searchCriteria }: IArticlesListProps) => {
	const { t } = useTranslation()

	const stickyActions = {export:true, delete:false}
	const [articles, setArticles] = useState<DataQueryType | undefined>(undefined)

	const [pagination, setPagination] = useState<PaginationType>({
		total: undefined,
		current: DEFAULT_PAGE_NUMBER,
		itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
	})

	const { isLoading, data, error } = useArticles(searchCriteria, pagination.current, pagination.itemsPerPage, "id")

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
			title: `${t("d:name")}`,
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("d:additionalDescription"),
			dataIndex: 'additionalDescription',
			key: 'additionalDescription',
		},
		{
			title: t("d:code"),
			dataIndex: 'code',
			key: 'code',
		},
		{
			title: t("d:status"),
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: t("d:length"),
			dataIndex: 'length',
			key: 'length',
		},
		{
			title: t("d:width"),
			dataIndex: 'width',
			key: 'width',
		},
		{
			title: t("d:height"),
			dataIndex: 'height',
			key: 'height',
		},
		{
			title: t("d:baseUnitWeight"),
			dataIndex: 'baseUnitWeight',
			key: 'baseUnitWeight',
		},
		{
			title: t("d:boxWeight"),
			dataIndex: 'boxWeight',
			key: 'boxWeight',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: string }) => (
				<Space>
					<LinkButton icon={<EyeTwoTone />} path={pathParams('/article/[id]', record.id)} />
					<Button icon={<DeleteOutlined />} danger onClick={() => alert(`delete article N° ${record.id}`)} />
				</Space>
			)
		}
	]



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
					stickyActions={stickyActions}
				/>

			}
		</>
	);
}

export { ArticlesList };