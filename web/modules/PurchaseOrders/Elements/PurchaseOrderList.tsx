import { AppTable, LinkButton, ContentSpin } from '@components';
import { Button, Space } from 'antd';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    usePurchaseOrders,
    pathParams,
    DataQueryType,
    PaginationType,
    orderByFormater
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { ProgressBar } from 'components/common/dumb/ProgressBar/ProgressBar';
import { PurchaseOrderProgressBar } from './PurchaseOrderProgressBar';

export interface IPurchaseOrderListProps {
    searchCriteria?: any;
}

const PurchaseOrderList = ({ searchCriteria }: IPurchaseOrderListProps) => {
    const { t } = useTranslation();
    const [purchaseOrders, setPurchaseOrder] = useState<DataQueryType>();

    const [sort, setSort] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [purchaseOrderName, setPurchaseOrderName] = useState('');

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = usePurchaseOrders(
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
                total: purchaseOrders?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, purchaseOrders]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setPurchaseOrder(data?.purchaseOrders);
            setPagination({
                ...pagination,
                total: data?.purchaseOrders?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const columns = [
        {
            title: 'd:companyId',
            dataIndex: 'stockOwnerId',
            key: 'stockOwnerId',
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
            title: 'd:type',
            dataIndex: 'typeText',
            key: 'typeText'
        },
        {
            title: 'd:status',
            dataIndex: 'statusText',
            key: 'statusText'
        },
        {
            title: 'd:supplier',
            dataIndex: 'supplier',
            key: 'supplier',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:orderDate',
            dataIndex: 'orderDate',
            key: 'orderDate'
        },
        {
            title: 'd:progress',
            key: 'progress',
            render: (record: {id:string, status: number}) => (
                <PurchaseOrderProgressBar id={record.id} status={record.status}/>
            )
                
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/purchase-orders/[id]', record.id)}
                    />
                    <Button
                        icon={<PrinterOutlined />}
                        onClick={() => {
                            setPurchaseOrderName(record.name);
                            setShowModal(true);
                        }}
                    />
                    <LinkButton
                        title={t('actions:add2', { name: t('common:line') })}
                        path={'/purchase-order-lines/add?poid=' + record.id}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {purchaseOrders ? (
                <AppTable
                    type="purchaseOrders"
                    columns={columns}
                    data={purchaseOrders!.results}
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

export { PurchaseOrderList };
