// import { EyeTwoTone, EditTwoTone } from '@ant-design/icons';
// import { Button, Space } from 'antd';
// import { AppTable } from '@components';
// // import { stockData } from 'fake-data/stock';
// import { DataQueryType, useStockStatuses } from '@helpers';
// import { useState } from 'react';

// export const StockStatusesList = () => {
//     const [stockStatuses, setStockStatuses] = useState<DataQueryType>();

//     const {isLoading, data, error} = useStockStatuses();
//     const columns = [
//         {
//             title: 'd:name',
//             dataIndex: 'name',
//             key: 'name'
//         },
//         {
//             title: 'd:value',
//             dataIndex: 'value',
//             key: 'value'
//         },
//         {
//             title: 'd:system',
//             dataIndex: 'system',
//             key: 'system'
//         },
//         {
//             title: 'd:comment',
//             dataIndex: 'comment',
//             key: 'comment'
//         },
//         {
//             title: 'actions:actions',
//             key: 'actions',
//             render: (record: { id: number }) => (
//                 <Space>
//                     <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
//                     <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
//                 </Space>
//             )
//         }
//     ];
//     return <AppTable type="stock-statuses" columns={columns} data={stockData} />;
// };


import { AppTable, LinkButton, ContentSpin } from '@components';
import { Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EditTwoTone, EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    pathParams,
    DataQueryType,
    PaginationType,
    orderByFormater,
    useStockStatuses
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';

export interface IStockStatusesListProps {
    searchCriteria?: any;
}

const StockStatusesList = ({ searchCriteria }: IStockStatusesListProps) => {
    const { t } = useTranslation();
    const [stockStatuses, setStockStatuses] = useState<Array<any>>();

    const [sort, setSort] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [purchaseOrderName, setStockStatusesName] = useState('');

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = useStockStatuses();

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: stockStatuses?.length,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, stockStatuses]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setStockStatuses(data?.listParametersForAScope);
            setPagination({
                ...pagination,
                total: data?.listParametersForAScope?.length
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'd:system',
            dataIndex: 'system',
            key: 'system'
        },
        {
            title: 'd:comment',
            dataIndex: 'comment',
            key: 'comment'
        },
        // {
        //     title: 'actions:actions',
        //     key: 'actions',
        //     render: (record: { id: number }) => (
        //         <Space>
        //             <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
        //             <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
        //         </Space>
        //     )
        // }
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/stock-statuses/[id]', record.id)}
                    />

                    <LinkButton
                        icon={<EditOutlined />}
                        path={pathParams('/stock-statuses/edit/[id]', record.id)}
                    />

                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`delete stock status ${record.id}`)}
                    />
                    
                </Space>
            )
        }
    ];

    return (
        <>
            {stockStatuses ? (
                <AppTable
                    type="stock-statuses"
                    columns={columns}
                    data={stockStatuses}
                    isLoading={isLoading}
                    pagination={pagination}
                    setPagination={onChangePagination}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { StockStatusesList };
