import { Button, Space } from 'antd';
import { locationsData } from 'fake-data/locations';
import { AppTable, ContentSpin } from '@components';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    useLocations
} from '@helpers';

export const LocationsList = () => {
    const [locations, setLocations] = useState<DataQueryType>();
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
                total: locations?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, locations]
    );

    const { isLoading, data, error } = useLocations(
        undefined,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setLocations(data?.locations); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.locations?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
        console.log(sorter);
    };

    const columns = [
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
            title: 'd:bloc',
            dataIndex: ['block', 'name'],
            key: ['block', 'name'],
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:aisle',
            dataIndex: 'aisle',
            key: 'aisle',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'common:column',
            dataIndex: 'column',
            key: 'column',
            sorter: {
                multiple: 4
            },
            showSorterTooltip: false
        },
        {
            title: 'd:level',
            dataIndex: 'level',
            key: 'level',
            sorter: {
                multiple: 5
            },
            showSorterTooltip: false
        },
        {
            title: 'd:position',
            dataIndex: 'position',
            key: 'position',
            sorter: {
                multiple: 6
            },
            showSorterTooltip: false
        },
        {
            title: 'd:replenish',
            dataIndex: 'replenish',
            key: 'replenish',
            sorter: {
                multiple: 7
            },
            showSorterTooltip: false
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Space>
                    <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
                    <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
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
            {locations ? (
                <AppTable
                    type="locations"
                    columns={columns}
                    data={locations!.results}
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
