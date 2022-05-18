import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import {
    pathParams,
    useBarcodes,
    DataQueryType,
    PaginationType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useLocations
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Button, Divider, Space, Typography } from 'antd';
import { useState, useEffect, useCallback } from 'react';

const { Title } = Typography;

export type BlockDetailsTypeProps = {
    details?: any;
};

const BlockDetails = ({ details }: BlockDetailsTypeProps) => {
    const { t } = useTranslation();

    const [locations, setLocations] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = useLocations(
        { blockId: details.id },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

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

    // For pagination
    useEffect(() => {
        if (data) {
            setLocations(data?.locations);
            setPagination({
                ...pagination,
                total: data?.locations?.count
            });
        }
    }, [data]);

    const locationColumns = [
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
            title: 'd:blockId',
            dataIndex: 'blockId',
            key: 'blockId'
        },
        {
            title: 'd:flagDouble',
            dataIndex: 'flagDouble',
            key: 'flagDouble'
        }
    ];

    return (
        <>
            <DetailsList details={details} />
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('common:locations') })}</Title>
            {locations ? (
                <AppTable
                    type="associatedLocations"
                    columns={locationColumns}
                    data={locations!.results}
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

export { BlockDetails };
