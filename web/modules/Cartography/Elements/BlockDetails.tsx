import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import { CheckCircleOutlined, CloseSquareOutlined, EyeTwoTone } from '@ant-design/icons';
import {
    pathParams,
    DataQueryType,
    PaginationType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useLocations
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Col, Divider, Row, Typography } from 'antd';
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
            showSorterTooltip: false,
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
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
            <Row justify="space-between">
                <Col span={6}>
                    <Title level={4}>{t('common:associated', { name: t('menu:locations') })}</Title>
                </Col>
                <Col span={6}>
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:location') })}
                        path="/add-location"
                        type="primary"
                    />
                </Col>
            </Row>
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
