import { AppTable, LinkButton, ContentSpin } from '@components';
import { Space, Button } from 'antd';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useArticles,
    pathParams,
    DataQueryType,
    PaginationType,
    orberByFormater,
    showInfo,
    showError,
    showSuccess
} from '@helpers';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import {
    ExportArticlesMutationVariables,
    ExportArticlesMutation,
    useExportArticlesMutation,
    ExportFormat
} from 'generated/graphql';
import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';

export interface IArticlesListProps {
    searchCriteria?: unknown;
}

const ArticlesList = ({ searchCriteria }: IArticlesListProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [articles, setArticles] = useState<DataQueryType>();

    const [sort, setSort] = useState<unknown>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = useArticles(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    // EXPORT ARTICLES SECTION
    const {
        mutate,
        isLoading: exportLoading,
        data: exportData
    } = useExportArticlesMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: ExportArticlesMutation,
            _variables: ExportArticlesMutationVariables,
            _context: unknown
        ) => {
            showSuccess(t('messages:success-exported'));
        },
        onError: () => {
            showError(t('messages:error-exporting-data'));
        }
    });

    const exportArticles = () => {
        mutate({
            format: ExportFormat.Csv,
            compression: null,
            separator: ',',
            orderBy: sort,
            filters: searchCriteria
        });
    };

    useEffect(() => {
        if (exportLoading) {
            showInfo(t('messages:info-export-wip'));
        }
    }, [exportLoading]);

    // END EXPORT

    const stickyActions = {
        export: {
            active: true,
            function: () => exportArticles()
        }
    };

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: articles?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, articles]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setArticles(data?.articles);
            setPagination({
                ...pagination,
                total: data?.articles?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: unknown, _filter: unknown, sorter: unknown) => {
        await setSort(orberByFormater(sorter));
    };

    // to refactor to be automatique when fetching data
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:additionalDescription',
            dataIndex: 'additionalDescription',
            key: 'additionalDescription',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:code',
            dataIndex: 'code',
            key: 'code',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'd:length',
            dataIndex: 'length',
            key: 'length'
        },
        {
            title: 'd:width',
            dataIndex: 'width',
            key: 'width'
        },
        {
            title: 'd:height',
            dataIndex: 'height',
            key: 'height'
        },
        {
            title: 'd:baseUnitWeight',
            dataIndex: 'baseUnitWeight',
            key: 'baseUnitWeight'
        },
        {
            title: 'd:boxWeight',
            dataIndex: 'boxWeight',
            key: 'boxWeight'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/article/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`delete article N° ${record.id}`)}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {articles ? (
                <AppTable
                    type="articles"
                    columns={columns}
                    data={articles!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    stickyActions={stickyActions}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { ArticlesList };
