import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    showError,
    showSuccess,
    useArticleSets
} from '@helpers';
import {
    DeleteArticleSetMutation,
    DeleteArticleSetMutationVariables,
    useDeleteArticleSetMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

export type ArticleSetsListTypeProps = {
    searchCriteria?: any;
};

export const SetsList = ({ searchCriteria }: ArticleSetsListTypeProps) => {
    const { t } = useTranslation();

    const [articleSets, setArticleSets] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: articleSets?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, articleSets]
    );

    const { isLoading, data, error, refetch } = useArticleSets(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setArticleSets(data?.articleSets); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.articleSets?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteArticleSetMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleSetMutation,
                _variables: DeleteArticleSetMutationVariables,
                _context: unknown
            ) => {
                if (!deleteLoading) {
                    refetch();
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteArticleSet = ({ id }: DeleteArticleSetMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const columns = [
        {
            title: 'common:stockOwner',
            dataIndex: ['stockOwner', 'name'],
            key: ['stockOwner', 'name'],
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'common:article',
            dataIndex: ['article', 'name'],
            key: ['article', 'name'],
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:description',
            dataIndex: ['article', 'additionalDescription'],
            key: ['article', 'additionalDescription'],
            sorter: {
                multiple: 4
            },
            showSorterTooltip: false
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton icon={<EyeTwoTone />} path={pathParams('/set/[id]', record.id)} />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/set/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        loading={deleteLoading}
                        onClick={() => deleteArticleSet({ id: record.id })}
                    />
                </Space>
            )
        }
    ];
    return (
        <>
            {articleSets ? (
                <AppTable
                    type="articleSets"
                    columns={columns}
                    data={articleSets!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};
