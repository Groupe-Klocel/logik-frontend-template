import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { articlesData } from 'fake-data/articles';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'
import { request, gql } from "graphql-request";
import { useQuery } from 'react-query';
import { GraphQLResponse } from 'graphql-request/dist/types';
import { IArticlesProps } from '../PagesContainer/Articles';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import { useGetAllArticlesQuery } from 'generated/graphql';




export const ArticlesList: FC = ({ }) => {
	const { t } = useTranslation()

	const { isLoading, data, error } = useGetAllArticlesQuery<GetAllArticlesQuery, Error>(graphqlRequestClient, {
		variables: {
			page: 1,
			itemsPerPage: 25,
		}
	})


	const columns = [
		{
			title: t("common:company"),
			dataIndex: 'company',
			key: 'company',
			fixed: true,
			disabled: false,
		},
		{
			title: t("forms:reference"),
			dataIndex: 'reference',
			key: 'reference',
			disabled: true,
		},
		{
			title: t("common:description"),
			dataIndex: 'description',
			key: 'description',
			disabled: true,
		},
		{
			title: t("forms:piece-to-be-replenish"),
			dataIndex: 'piece-to-be-replenish',
			key: 'piece-to-be-replenish',
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
			title: t("common:weight"),
			dataIndex: 'weight',
			key: 'weight',
			disabled: false,
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			disabled: false,
			render: (record: { id: number; name: string; }) => (
				<Button
					onClick={() => alert(`View ${record.id} - ${record.name}`)}>
					{t("actions:view")}
				</Button>
			),
		},
	];




	return (
		<AppTable columns={columns} data={articlesData} scroll={{ x: 800 }} />
	);
}