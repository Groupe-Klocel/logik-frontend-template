import {
    DeleteOutlined,
    EyeTwoTone,
    EditTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined
} from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
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
    useBlocks
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import {
    DeleteBlockMutation,
    DeleteBlockMutationVariables,
    GetBlockLevelsParamsQuery,
    useDeleteBlockMutation,
    useGetBlockLevelsParamsQuery
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

export type BlocksListTypeProps = {
    searchCriteria?: any;
};

export const BlocksList = ({ searchCriteria }: BlocksListTypeProps) => {
    const { t } = useTranslation();

    const [blocks, setBlocks] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });
    const [blockLevels, setBlockLevels] = useState<any>();

    //To render block Levels from parameter table for the given scope
    const blockLevelsList = useGetBlockLevelsParamsQuery<Partial<GetBlockLevelsParamsQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        if (blockLevelsList) {
            setBlockLevels(blockLevelsList?.data?.listParametersForAScope);
        }
    }, [blockLevelsList]);

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: blocks?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, blocks]
    );

    const { isLoading, data, error, refetch } = useBlocks(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setBlocks(data?.blocks); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.blocks?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const { mutate, isLoading: deleteLoading } = useDeleteBlockMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteBlockMutation,
                _variables: DeleteBlockMutationVariables,
                _context: unknown
            ) => {
                if (!deleteLoading) {
                    refetch;
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteBlock = ({ id }: DeleteBlockMutationVariables) => {
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
            title: 'd:name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:moveable',
            dataIndex: 'moveable',
            key: 'moveable',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:bulk',
            dataIndex: 'bulk',
            key: 'bulk',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:level',
            dataIndex: 'level',
            key: 'level',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false,
            render: (level: any) => blockLevels.find((e: any) => e.code == level).text
        },
        {
            title: 'd:blockGroup',
            dataIndex: 'blockGroup',
            key: 'blockGroup',
            render: (blockGroup: any) => (blockGroup == 0 ? t('common:none') : blockGroup)
        },
        {
            title: 'common:comment',
            dataIndex: 'comment',
            key: 'comment'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton icon={<EyeTwoTone />} path={pathParams('/block/[id]', record.id)} />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/block/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        loading={deleteLoading}
                        onClick={() => deleteBlock({ id: record.id })}
                    />
                </Space>
            )
        }
    ];
    return (
        <>
            {blocks ? (
                <AppTable
                    type="blocks"
                    columns={columns}
                    data={blocks!.results}
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
