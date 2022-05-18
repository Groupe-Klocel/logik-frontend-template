import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';
import {
    pathParams,
    DataQueryType,
    PaginationType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useLocations
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Divider, Typography } from 'antd';
import { useState, useEffect, useCallback } from 'react';

const { Title } = Typography;

export interface IBlockDetailsProps {
    details?: any;
}

const BlockDetails = ({ details }: IBlockDetailsProps) => {
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

    const locationColumns = [
        {
            title: t('d:id'),
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: t('common:name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('menu:block'),
            dataIndex: ['block', 'name'],
            key: ['block', 'name']
        },
        {
            title: t('actions:actions'),
            key: 'actions',
            render: (record: { id: string }) => (
                <LinkButton icon={<EyeTwoTone />} path={pathParams('/location/[id]', record.id)} />
            )
        }
    ];

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

    return (
        <>
            <DetailsList details={details} />
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('menu:locations') })}</Title>
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
