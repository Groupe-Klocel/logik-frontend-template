import { AppTable, LinkButton } from '@components';
import { Space, Button } from 'antd';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useArticles,
    pathParams,
    DataQueryType,
    PaginationType,
    purgeSorter
} from '@helpers';
import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';

export interface IArticlesListProps {
    searchCriteria?: any;
}

const ArticlesList = ({ searchCriteria }: IArticlesListProps) => {
    const stickyActions = { export: true, delete: false };
    const [articles, setArticles] = useState<DataQueryType | undefined>(undefined);

    const [sort, setSort] = useState<any>(null);

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

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                ...pagination,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination]
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

    const orberByFormater = (sorter: any) => {
        let newSorter = purgeSorter(sorter);
        return newSorter;
    };

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
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
            {articles && (
                <AppTable
                    type="articles"
                    columns={columns}
                    data={articles!.results}
                    scroll={{ x: 800 }}
                    pagination={pagination}
                    setPagination={onChangePagination}
                    stickyActions={stickyActions}
                    onChange={handleTableChange}
                />
            )}
        </>
    );
};

export { ArticlesList };
