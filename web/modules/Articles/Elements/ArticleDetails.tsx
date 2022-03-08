import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';
import {
    pathParams,
    useBarcodes,
    DataQueryType,
    PaginationType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Divider, Typography } from 'antd';
import { useState, useEffect, useCallback } from 'react';

const { Title } = Typography;

export interface IArticleDetailsProps {
    details?: any;
}

const ArticleDetails = ({ details }: IArticleDetailsProps) => {
    const { t } = useTranslation();

    const [barcodes, setBarcodes] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = useBarcodes(
        { articleId: parseInt(details.id) },
        pagination.current,
        pagination.itemsPerPage,
        null
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

    // Remove barcodes from all other details
    const barcodeColumns = [
        {
            title: 'd:id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:articleId',
            dataIndex: 'articleId',
            key: 'articleId'
        },
        {
            title: 'd:flagDouble',
            dataIndex: 'flagDouble',
            key: 'flagDouble'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <LinkButton icon={<EyeTwoTone />} path={pathParams('/barcode/[id]', record.id)} />
            )
        }
    ];

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

    return (
        <>
            <DetailsList details={details} />
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('common:barcodes') })}</Title>
            {barcodes ? (
                <AppTable
                    type="associatedBarcodes"
                    columns={barcodeColumns}
                    data={barcodes!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    filter={false}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { ArticleDetails };
