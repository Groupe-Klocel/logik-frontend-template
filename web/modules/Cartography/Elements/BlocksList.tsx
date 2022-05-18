import {
    DeleteOutlined,
    EyeTwoTone,
    EditTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined
} from '@ant-design/icons';
import { Button, Space } from 'antd';
import { blocsData } from 'fake-data/blocs';
import { AppTable, ContentSpin, LinkButton } from '@components';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    useBlocks
} from '@helpers';

export type BlocksListTypeProps = {
    searchCriteria?: any;
};

export const BlocksList = ({ searchCriteria }: BlocksListTypeProps) => {
    const [blocks, setBlocks] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

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

    const { isLoading, data, error } = useBlocks(
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
    console.log(data);
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
            title: 'd:level',
            dataIndex: 'level',
            key: 'level',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
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
                    {/* <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} /> */}
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} `)}
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
