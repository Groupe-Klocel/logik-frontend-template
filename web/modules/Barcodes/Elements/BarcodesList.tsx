import { AppTable, LinkButton, ContentSpin } from '@components';
import { Button, Space } from 'antd';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useBarcodes,
    pathParams,
    DataQueryType,
    PaginationType,
    purgeSorter
} from '@helpers';

export interface IBarcodesListProps {
    searchCriteria?: any;
}

const BarcodesList = ({ searchCriteria }: IBarcodesListProps) => {
    const [barcodes, setBarcodes] = useState<DataQueryType>();

    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = useBarcodes(
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
                total: barcodes?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, barcodes]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setBarcodes(data?.barcodes);
            setPagination({
                ...pagination,
                total: data?.barcodes?.count
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
            title: 'd:accountId',
            dataIndex: 'accountId',
            key: 'accountId',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:companyId',
            dataIndex: 'companyId',
            key: 'companyId'
        },
        {
            title: 'd:articleId',
            dataIndex: 'articleId',
            key: 'articleId'
        },
        {
            title: 'd:rotation',
            dataIndex: 'rotation',
            key: 'rotation',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:preparationMode',
            dataIndex: 'preparationMode',
            key: 'preparationMode'
        },
        {
            title: 'd:flagDouble',
            dataIndex: 'flagDouble',
            key: 'flagDouble'
        },
        {
            title: 'd:supplierName',
            dataIndex: 'supplierName',
            key: 'supplierName'
        },
        {
            title: 'd:supplierArticleCode',
            dataIndex: 'supplierArticleCode',
            key: 'supplierArticleCode'
        },
        {
            title: 'd:quantity',
            dataIndex: 'quantity',
            key: 'quantity'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                  <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/barcode/[id]', record.id)}
                    />
                    <Button
                        icon={<PrinterOutlined />}
                        onClick={() => alert(`Print ${record.id} `)}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {barcodes ? (
                <AppTable
                    type="barcodes"
                    columns={columns}
                    data={barcodes!.results}
                    scroll={{ x: 800 }}
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

export { BarcodesList };
