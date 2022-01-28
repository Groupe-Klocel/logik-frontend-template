import { AppTable, LinkButton, ScreenSpin } from '@components';
import { useAuth } from 'context/AuthContext';
import { GetAllArticlesQuery, useGetAllArticlesQuery } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';

export interface IArticlesListProps {

}

const ArticlesList = ({ }: IArticlesListProps) => {
	const { t } = useTranslation()
	const { graphqlRequestClient } = useAuth()

	const { isLoading, data, error } = useGetAllArticlesQuery<Partial<GetAllArticlesQuery>, Error>(graphqlRequestClient, {
		filters: null,
		orderBy: null,
		page: 1,
		itemsPerPage: 20,
	})
	console.log(data)

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
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			disabled: false,
			render: (record: { id: string }) => (
				<LinkButton title={t("actions:view")} path={pathParams(record.id)} />
			)
		}
	]
	const pathParams = (id: string) => { return { pathname: '/article/[aid]', query: { aid: id } } }


	return (
		<>
			{data ? (
				<AppTable columns={columns} data={data?.articles?.results} scroll={{ x: 800 }} isLoading={isLoading} />
			) : (
				<ScreenSpin />
			)
			}
		</>
	);
}

export { ArticlesList };

