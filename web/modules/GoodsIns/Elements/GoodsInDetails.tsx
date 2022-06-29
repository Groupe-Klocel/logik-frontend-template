import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import {
    pathParams,
    useGoodsInLines,
    DataQueryType,
    PaginationType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Button, Divider, Space, Typography } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { useAppState } from 'context/AppContext';
import { Table } from 'generated/graphql';

const { Title } = Typography;

export interface IGoodsInDetailsProps {
    details?: any;
}

const GoodsInDetails = ({ details }: IGoodsInDetailsProps) => {
    const { t } = useTranslation();

    const [goodsInLines, setGoodsInLines] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.GoodsInLine;
        })?.mode;

    const { isLoading, data, error } = useGoodsInLines(
        { goodsInId: details.id },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: goodsInLines?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, goodsInLines]
    );

    const goodsInLinesColumns = [
        {
            title: 'd:id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'd:purchaseOrder',
            dataIndex: 'purchaseOrderId',
            key: 'purchaseOrderId'
        },
        {
            title: 'd:article',
            dataIndex: 'articleId',
            key: 'articleId'
        },
        {
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'd:quantity',
            dataIndex: 'quantity',
            key: 'quantity'
        },
        {
            title: 'd:reservation',
            dataIndex: 'reservation',
            key: 'reservation'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    {mode == null ? (
                        <></>
                    ) : (
                        <>
                            <LinkButton
                                icon={<EyeTwoTone />}
                                path={pathParams('/goods-in-line/[id]', record.id)}
                            />
                        </>
                    )}
                </Space>
            )
        }
    ];

    // For pagination
    useEffect(() => {
        if (data) {
            setGoodsInLines(data?.goodsInLines);
            setPagination({
                ...pagination,
                total: data?.goodsInLines?.count
            });
        }
    }, [data]);

    return (
        <>
            <DetailsList details={details} />
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('common:goods-in-lines') })}</Title>
            {goodsInLines ? (
                <AppTable
                    type="associatedGoodsInLine"
                    columns={goodsInLinesColumns}
                    data={goodsInLines!.results}
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

export { GoodsInDetails };
