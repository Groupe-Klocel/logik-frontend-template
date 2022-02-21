import { AppTable, LinkButton } from '@components';
import { Button, Space } from 'antd';
import { barcodesData } from 'fake-data/barcodes';
import useTranslation from 'next-translate/useTranslation';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useBarcodes,
    pathParams,
    showError,
    DataQueryType,
    PaginationType
} from '@helpers';

export interface IBarcodesListProps {
    searchCriteria?: any;
}

const BarcodesList = ({ searchCriteria }: IBarcodesListProps) => {
    let { t } = useTranslation();

    const [barcodes, setBarcodes] = useState<DataQueryType | undefined>(undefined);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = useBarcodes(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        'id'
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
            setBarcodes(data?.barcodes);
            setPagination({
                ...pagination,
                total: data?.barcodes?.count
            });
        }
    }, [data]);

    const columns = [
        {
            title: t('common:name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('d:accountId'),
            dataIndex: 'accountId',
            key: 'accountId'
        },
        {
            title: t('d:companyId'),
            dataIndex: 'companyId',
            key: 'companyId'
        },
        {
            title: t('d:articleId'),
            dataIndex: 'articleId',
            key: 'articleId'
        },
        {
            title: t('d:rotation'),
            dataIndex: 'rotation',
            key: 'rotation'
        },
        {
            title: t('d:preparationMode'),
            dataIndex: 'preparationMode',
            key: 'preparationMode'
        },
        {
            title: t('d:flagDouble'),
            dataIndex: 'flagDouble',
            key: 'flagDouble'
        },
        {
            title: t('d:supplierName'),
            dataIndex: 'supplierName',
            key: 'supplierName'
        },
        {
            title: t('d:supplierArticleCode'),
            dataIndex: 'supplierArticleCode',
            key: 'supplierArticleCode'
        },
        {
            title: t('d:quantity'),
            dataIndex: 'quantity',
            key: 'quantity'
        },
        {
            title: t('actions:actions'),
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/barcode/[id]', record.id)}
                    />
                    <Button
                        icon={<PrinterOutlined />}
                        onClick={() => alert(`Print ${record.id} - ${record.name}`)}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {barcodes && (
                <AppTable
                    type="barcodes"
                    columns={columns}
                    data={barcodes!.results}
                    scroll={{ x: 800 }}
                    pagination={pagination}
                    setPagination={onChangePagination}
                />
            )}
        </>
    );
};

export { BarcodesList };
